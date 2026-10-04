<?php
/**
 * NeonPlan 3D – customer keys, installation binding and pack delivery for WooCommerce.
 *
 * Every customer gets one key (NP-XXXX-XXXX-XXXX-XXXX) with the first pack purchase. The key is shown
 * in the order e-mail, on the thank-you page and in "My account". In NeonPlan 3D the customer enters
 * it once: the integration then lists the bought packs, installs them signed for that installation
 * (its fingerprint goes into the signature, so a copied file is refused elsewhere) and checks once a
 * day for updates and new purchases. A key can be bound to a few installations (a move to new
 * hardware is fine, handing it around is not).
 *
 * REST API (used by the integration, custom_components/neonplan3d/license.py):
 *   POST /wp-json/neonplan/v1/catalog  {key, instance}        -> {licensee, packs: [{id, name, release, url}],
 *                                                                 offers: [{id, name, teaser, image, url, kind, price, new}],
 *                                                                 loyalty: {code, percent} | null}
 *   POST /wp-json/neonplan/v1/pack     {key, instance, pack}  -> the signed pack file (JSON)
 * Errors are JSON {code, message} with HTTP 4xx; codes: invalid_key, activation_limit, not_owned, not_found.
 *
 * Setup: same as ms-np-sign.php (seed in wp-config.php, <pack>.canonical.json next to the pack files,
 * products carry _ms_np_key = pack key or a comma-separated list for the bundle); drop this file next to
 * ms-np-sign.php. Both files share the helpers ms_np_put_licensee / ms_np_put_instance.
 *
 * Offers: every published product with a _ms_np_key and a price (no free sampler) that the customer does
 * not own yet; the product's short description is the teaser, its picture the image. Products from the
 * last MS_NP_NEW_DAYS days count as new.
 *
 * Loyalty: with the first paid pack order every customer gets a personal coupon (MS_NP_LOYALTY_PERCENT on
 * every further pack and Pro add-on, not on bundles), bound to the buyer's e-mail. It shows in the order
 * mail, the account and in NeonPlan 3D; a shop link with ?np_coupon=CODE puts it into the cart.
 */

if (!defined('ABSPATH')) {
    exit;
}

const MS_NP_LICENSE_META = '_ms_np_license';
const MS_NP_INSTANCES_META = '_ms_np_instances';
/** How many different installations a key may be bound to at once, and how many new bindings a year allows. */
const MS_NP_MAX_INSTANCES = 3;
const MS_NP_BINDINGS_PER_YEAR = 5;
/** Meta key of the log of new bindings (timestamps), so moves are counted even after the oldest binding dropped out. */
const MS_NP_BIND_LOG_META = '_ms_np_bind_log';
/** Requests per hour before the API answers 429: per licence key (one customer), and per client address
 *  (many customers may share one address behind a provider's NAT or a proxy, so this one is generous). */
const MS_NP_RATE_LIMIT = 300;
const MS_NP_RATE_LIMIT_IP = 3000;
const MS_NP_SHOP_PAGE = 'https://mastershort.de/neonplan3d/';
/** Loyalty discount in percent on further purchases, and the meta key of the customer's coupon code. */
const MS_NP_LOYALTY_PERCENT = 10;
const MS_NP_COUPON_META = '_ms_np_coupon';
/** Products this young show as "new" in NeonPlan 3D. */
const MS_NP_NEW_DAYS = 45;

// ------------------------------------------------------------------------------------ keys

/** The customer's key, created with the first pack order; '' when the order holds no pack. */
function ms_np_ensure_license(WC_Order $order): string
{
    if (!ms_np_order_pack_keys($order)) {
        return '';
    }
    $user_id = $order->get_customer_id();
    if ($user_id) {
        $key = (string) get_user_meta($user_id, MS_NP_LICENSE_META, true);
        if ($key === '') {
            $key = ms_np_new_key();
            update_user_meta($user_id, MS_NP_LICENSE_META, $key);
        }
        return $key;
    }
    // guest order: the key lives on the order (its e-mail is the account)
    $key = (string) $order->get_meta(MS_NP_LICENSE_META);
    if ($key === '') {
        foreach (ms_np_guest_orders($order->get_billing_email()) as $other) {
            $key = (string) $other->get_meta(MS_NP_LICENSE_META);
            if ($key !== '') {
                break;
            }
        }
        if ($key === '') {
            $key = ms_np_new_key();
        }
        $order->update_meta_data(MS_NP_LICENSE_META, $key);
        $order->save();
    }
    return $key;
}

function ms_np_new_key(): string
{
    // no 0/O/1/I, so the key can be read aloud
    $alphabet = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    $parts = [];
    for ($i = 0; $i < 4; $i++) {
        $part = '';
        for ($j = 0; $j < 4; $j++) {
            $part .= $alphabet[random_int(0, strlen($alphabet) - 1)];
        }
        $parts[] = $part;
    }
    return 'NP-' . implode('-', $parts);
}

/** The pack keys (living, kitchen, …) an order contains; the bundle lists several, comma-separated. */
function ms_np_order_pack_keys(WC_Order $order): array
{
    $keys = [];
    foreach ($order->get_items() as $item) {
        $product = $item->get_product();
        if (!$product) {
            continue;
        }
        $meta = (string) $product->get_meta('_ms_np_key');
        if ($meta === '' && $product->get_parent_id()) {
            $meta = (string) wc_get_product($product->get_parent_id())->get_meta('_ms_np_key');
        }
        foreach (array_filter(array_map('trim', explode(',', $meta))) as $key) {
            if (preg_match('/^[a-z0-9_]+$/', $key)) {
                $keys[$key] = true;
            }
        }
    }
    return array_keys($keys);
}

function ms_np_guest_orders(string $email): array
{
    if ($email === '') {
        return [];
    }
    return wc_get_orders(['billing_email' => $email, 'customer_id' => 0, 'status' => ['completed', 'processing'], 'limit' => 50]);
}

add_action('woocommerce_order_status_completed', 'ms_np_on_order_paid');
add_action('woocommerce_order_status_processing', 'ms_np_on_order_paid');
function ms_np_on_order_paid(int $order_id): void
{
    $order = wc_get_order($order_id);
    if ($order) {
        ms_np_ensure_license($order);
        ms_np_coupon_for_order($order);
    }
}

/** The key in the order e-mail, on the thank-you page and in the order details. */
add_action('woocommerce_email_after_order_table', 'ms_np_key_in_mail', 10, 4);
function ms_np_key_in_mail(WC_Order $order, bool $sent_to_admin, bool $plain_text, $email): void
{
    if ($sent_to_admin) {
        return;
    }
    $key = ms_np_ensure_license($order);
    if ($key === '') {
        return;
    }
    $coupon = ms_np_coupon_for_order($order);
    if ($plain_text) {
        echo "\n" . 'NeonPlan 3D – Lizenzschlüssel: ' . $key . "\n" . 'In NeonPlan 3D unter Erweiterungen > Shop-Verbindung eintragen; die gekauften Packs erscheinen dann dort und bekommen Updates von selbst.' . "\n";
        if ($coupon !== '') {
            echo 'Dein Treuerabatt: ' . MS_NP_LOYALTY_PERCENT . ' % auf jedes weitere Pack und jede Pro-Erweiterung mit dem Code ' . $coupon . "\n";
        }
        echo "\n";
        return;
    }
    echo '<h2>NeonPlan 3D – Lizenzschlüssel</h2><p style="font-size:1.3em;font-family:monospace"><b>' . esc_html($key) . '</b></p>'
        . '<p>In NeonPlan 3D unter <i>Erweiterungen › Shop-Verbindung</i> eintragen. Die gekauften Packs erscheinen dann dort und bekommen Updates von selbst. Alles Installierte funktioniert auch ohne Verbindung.</p>'
        . ms_np_coupon_html($coupon);
}

/** The loyalty code as a short paragraph ('' without a code). */
function ms_np_coupon_html(string $coupon): string
{
    if ($coupon === '') {
        return '';
    }
    return '<p>🎁 Dein Treuerabatt: <b>' . MS_NP_LOYALTY_PERCENT . ' %</b> auf jedes weitere Pack und jede Pro-Erweiterung mit dem Code <b style="font-family:monospace">' . esc_html($coupon) . '</b>.</p>';
}

add_action('woocommerce_order_details_after_order_table', 'ms_np_key_in_order');
function ms_np_key_in_order(WC_Order $order): void
{
    $key = ms_np_ensure_license($order);
    if ($key !== '') {
        echo '<section class="ms-np-license"><h2>NeonPlan 3D – Lizenzschlüssel</h2><p style="font-size:1.3em;font-family:monospace"><b>' . esc_html($key) . '</b></p>'
            . '<p>In NeonPlan 3D unter <i>Erweiterungen › Shop-Verbindung</i> eintragen.</p>' . ms_np_coupon_html(ms_np_coupon_for_order($order)) . '</section>';
    }
}

add_action('woocommerce_account_dashboard', 'ms_np_key_in_account');
function ms_np_key_in_account(): void
{
    $key = (string) get_user_meta(get_current_user_id(), MS_NP_LICENSE_META, true);
    if ($key !== '') {
        $owner = ms_np_find_license($key);
        echo '<section class="ms-np-license"><h3>NeonPlan 3D – Lizenzschlüssel</h3><p style="font-size:1.3em;font-family:monospace"><b>' . esc_html($key) . '</b></p>'
            . '<p>In NeonPlan 3D unter <i>Erweiterungen › Shop-Verbindung</i> eintragen. Gekaufte Packs erscheinen dort und bekommen Updates von selbst.</p>'
            . ($owner ? ms_np_coupon_html(ms_np_ensure_coupon($owner)) : '') . '</section>';
    }
}

// ------------------------------------------------------------------------------- lookup

/**
 * Who owns a key: ['user_id' => int, 'orders' => WC_Order[], 'name' => string] or null.
 */
function ms_np_find_license(string $key): ?array
{
    // tester codes (ms-np-testers.php): a key without an order
    $extra = apply_filters('ms_np_find_license_extra', null, $key);
    if (is_array($extra)) {
        return $extra;
    }
    $users = get_users(['meta_key' => MS_NP_LICENSE_META, 'meta_value' => $key, 'number' => 1, 'fields' => 'ID']);
    if ($users) {
        $user_id = (int) $users[0];
        $orders = wc_get_orders(['customer_id' => $user_id, 'status' => ['completed', 'processing'], 'limit' => -1]);
        $user = get_userdata($user_id);
        $name = $user ? trim($user->first_name . ' ' . $user->last_name) : '';
        if ($name === '' && $orders) {
            $name = ms_np_buyer_name($orders[0]);
        }
        return ['user_id' => $user_id, 'orders' => $orders, 'name' => $name !== '' ? $name : ($user ? $user->display_name : 'Kunde')];
    }
    $orders = wc_get_orders(['meta_key' => MS_NP_LICENSE_META, 'meta_value' => $key, 'status' => ['completed', 'processing'], 'limit' => 1]);
    if (!$orders) {
        return null;
    }
    $all = ms_np_guest_orders($orders[0]->get_billing_email()) ?: $orders;
    return ['user_id' => 0, 'orders' => $all, 'name' => ms_np_buyer_name($orders[0])];
}

/** Pack keys the customer owns, from all paid orders. */
function ms_np_owned_pack_keys(array $owner): array
{
    // tester codes carry their packs themselves
    if (isset($owner['packs'])) {
        return $owner['packs'];
    }
    $keys = [];
    foreach ($owner['orders'] as $order) {
        foreach (ms_np_order_pack_keys($order) as $key) {
            $keys[$key] = true;
        }
    }
    return array_keys($keys);
}

/** id, name and release of a pack from its canonical template (cached a few minutes). */
function ms_np_pack_meta(string $pack_key): ?array
{
    $cached = get_transient('ms_np_meta_' . $pack_key);
    if (is_array($cached)) {
        return $cached;
    }
    $uploads = wp_upload_dir();
    $template = trailingslashit($uploads['basedir']) . MS_NP_UPLOAD_DIR . '/' . $pack_key . '.canonical.json';
    if (!is_readable($template)) {
        return null;
    }
    $payload = json_decode((string) file_get_contents($template), true);
    if (!is_array($payload) || empty($payload['id'])) {
        return null;
    }
    $meta = [
        'key' => $pack_key,
        'id' => (string) $payload['id'],
        'name' => (string) ($payload['name'] ?? $pack_key),
        'release' => (int) ($payload['release'] ?? 1),
    ];
    set_transient('ms_np_meta_' . $pack_key, $meta, 10 * MINUTE_IN_SECONDS);
    return $meta;
}

/** A product saved or published: the cached shop pages and pack details are dropped at once. */
add_action('save_post_product', 'ms_np_flush_caches');
function ms_np_flush_caches(): void
{
    global $wpdb;
    $wpdb->query("DELETE FROM {$wpdb->options} WHERE option_name LIKE '\_transient\_ms\_np\_url\_%' OR option_name LIKE '\_transient\_timeout\_ms\_np\_url\_%' OR option_name LIKE '\_transient\_ms\_np\_meta\_%' OR option_name LIKE '\_transient\_timeout\_ms\_np\_meta\_%' OR option_name LIKE '\_transient\_ms\_np\_offers' OR option_name LIKE '\_transient\_timeout\_ms\_np\_offers'");
    wp_cache_flush_group('transient');
}

/** The shop page of a pack: the product with this _ms_np_key (not the bundle). */
function ms_np_pack_url(string $pack_key): string
{
    $cached = get_transient('ms_np_url_' . $pack_key);
    if (is_string($cached)) {
        return $cached;
    }
    $url = MS_NP_SHOP_PAGE;
    $ids = wc_get_products(['meta_key' => '_ms_np_key', 'meta_value' => $pack_key, 'limit' => 1, 'return' => 'ids']);
    if ($ids) {
        $url = (string) get_permalink($ids[0]);
    }
    set_transient('ms_np_url_' . $pack_key, $url, HOUR_IN_SECONDS);
    return $url;
}

// --------------------------------------------------------------------------- binding

/** Where a key's installations (and its binding log) are kept: user meta, or the first order of a guest. */
function ms_np_instances(array $owner, string $meta = MS_NP_INSTANCES_META): array
{
    // tester codes keep their bindings elsewhere
    $pre = apply_filters('ms_np_pre_instances', null, $owner, $meta);
    if (is_array($pre)) {
        return $pre;
    }
    if ($owner['user_id']) {
        $list = get_user_meta($owner['user_id'], $meta, true);
    } else {
        $list = $owner['orders'] ? $owner['orders'][0]->get_meta($meta) : [];
    }
    return is_array($list) ? $list : [];
}

function ms_np_save_instances(array $owner, array $list, string $meta = MS_NP_INSTANCES_META): void
{
    if (apply_filters('ms_np_pre_save_instances', false, $owner, $list, $meta)) {
        return;
    }
    if ($owner['user_id']) {
        update_user_meta($owner['user_id'], $meta, $list);
    } elseif ($owner['orders']) {
        $owner['orders'][0]->update_meta_data($meta, $list);
        $owner['orders'][0]->save();
    }
}

/**
 * Binds an installation to the key. Already bound: fine. A new one is allowed while fewer than
 * MS_NP_BINDINGS_PER_YEAR new bindings happened in the last 365 days; at most MS_NP_MAX_INSTANCES stay
 * bound at once, the oldest one drops out (a move to new hardware just works). False at the limit.
 */
function ms_np_bind_instance(array $owner, string $instance): bool
{
    $list = ms_np_instances($owner);
    foreach ($list as $entry) {
        if (($entry['fp'] ?? '') === $instance) {
            return true;
        }
    }
    $year_ago = time() - 365 * DAY_IN_SECONDS;
    // the log counts every new binding of the year, also ones that dropped out of the list since;
    // bindings from before the log existed count through their own timestamps
    $log = array_map('intval', ms_np_instances($owner, MS_NP_BIND_LOG_META));
    if (!$log) {
        $log = array_map(fn ($e) => (int) ($e['at'] ?? 0), $list);
    }
    $log = array_values(array_filter($log, fn ($t) => $t > $year_ago));
    if (count($log) >= MS_NP_BINDINGS_PER_YEAR) {
        return false;
    }
    $list[] = ['fp' => $instance, 'at' => time()];
    while (count($list) > MS_NP_MAX_INSTANCES) {
        array_shift($list);
    }
    $log[] = time();
    ms_np_save_instances($owner, $list);
    ms_np_save_instances($owner, $log, MS_NP_BIND_LOG_META);
    return true;
}

/** The installation a key was bound to last (for downloads from the website), or null. */
function ms_np_latest_instance_of_key(string $key): ?string
{
    $owner = ms_np_find_license($key);
    if (!$owner) {
        return null;
    }
    $list = ms_np_instances($owner);
    $last = end($list);
    return $last && !empty($last['fp']) ? (string) $last['fp'] : null;
}

// ----------------------------------------------------------------------------- loyalty

/** The loyalty code of an order's customer (created with the first paid pack order); '' without packs. */
function ms_np_coupon_for_order(WC_Order $order): string
{
    $key = ms_np_ensure_license($order);
    if ($key === '' || !in_array($order->get_status(), ['completed', 'processing'], true)) {
        return '';
    }
    $owner = ms_np_find_license($key);
    return $owner ? ms_np_ensure_coupon($owner) : '';
}

/**
 * The customer's personal coupon: MS_NP_LOYALTY_PERCENT on packs and Pro add-ons (bundles excluded by
 * ms_np_loyalty_valid_for_product), unlimited uses, only for the buyer's e-mail. Created once.
 */
function ms_np_ensure_coupon(array $owner): string
{
    if (!$owner['orders']) {
        return '';
    }
    $code = (string) ($owner['user_id'] ? get_user_meta($owner['user_id'], MS_NP_COUPON_META, true) : $owner['orders'][0]->get_meta(MS_NP_COUPON_META));
    if ($code !== '' && wc_get_coupon_id_by_code($code)) {
        return $code;
    }
    $email = $owner['orders'][0]->get_billing_email();
    if ($owner['user_id']) {
        $user = get_userdata($owner['user_id']);
        $email = $user && $user->user_email ? $user->user_email : $email;
    }
    if (!$email || !class_exists('WC_Coupon')) {
        return '';
    }
    $code = 'NP-TREUE-' . substr(ms_np_new_key(), 3, 4) . substr(ms_np_new_key(), 8, 2);
    $coupon = new WC_Coupon();
    $coupon->set_code($code);
    $coupon->set_discount_type('percent');
    $coupon->set_amount(MS_NP_LOYALTY_PERCENT);
    $coupon->set_individual_use(false);
    $coupon->set_usage_limit(0);
    $coupon->set_email_restrictions(array_values(array_unique(array_filter([strtolower($email), strtolower($owner['orders'][0]->get_billing_email())]))));
    $coupon->set_description('NeonPlan 3D Treuerabatt für ' . $email);
    $coupon->update_meta_data('_ms_np_loyalty', '1');
    $coupon->save();
    if ($owner['user_id']) {
        update_user_meta($owner['user_id'], MS_NP_COUPON_META, $code);
    } else {
        $owner['orders'][0]->update_meta_data(MS_NP_COUPON_META, $code);
        $owner['orders'][0]->save();
    }
    return $code;
}

/** Loyalty coupons leave bundles alone (they are discounted already). */
add_filter('woocommerce_coupon_is_valid_for_product', 'ms_np_loyalty_valid_for_product', 10, 4);
function ms_np_loyalty_valid_for_product(bool $valid, $product, $coupon, $values): bool
{
    if (!$valid || !$coupon || $coupon->get_meta('_ms_np_loyalty') !== '1' || !$product) {
        return $valid;
    }
    $meta = (string) $product->get_meta('_ms_np_key');
    if ($meta === '' && $product->get_parent_id()) {
        $parent = wc_get_product($product->get_parent_id());
        $meta = $parent ? (string) $parent->get_meta('_ms_np_key') : '';
    }
    return strpos($meta, ',') === false;
}

/** A shop link with ?np_coupon=CODE keeps the code and puts it into the cart as soon as it holds something. */
add_action('wp_loaded', 'ms_np_remember_coupon', 20);
function ms_np_remember_coupon(): void
{
    if (empty($_GET['np_coupon']) || !function_exists('WC') || !WC()->session) {
        return;
    }
    $code = strtoupper(sanitize_text_field(wp_unslash($_GET['np_coupon'])));
    if (!preg_match('/^[A-Z0-9-]{4,30}$/', $code)) {
        return;
    }
    if (!WC()->session->has_session()) {
        WC()->session->set_customer_session_cookie(true);
    }
    WC()->session->set('ms_np_coupon', $code);
}

add_action('woocommerce_add_to_cart', 'ms_np_apply_remembered_coupon', 20);
add_action('woocommerce_before_cart', 'ms_np_apply_remembered_coupon');
add_action('woocommerce_before_checkout_form', 'ms_np_apply_remembered_coupon');
function ms_np_apply_remembered_coupon(): void
{
    if (!function_exists('WC') || !WC()->session || !WC()->cart || WC()->cart->is_empty()) {
        return;
    }
    $code = (string) WC()->session->get('ms_np_coupon');
    if ($code === '') {
        return;
    }
    if (WC()->cart->has_discount($code) || WC()->cart->apply_coupon($code)) {
        // forget the code only once it is in the cart
        WC()->session->set('ms_np_coupon', '');
    }
}

/**
 * A loyalty code is bound to the buyer's e-mail; a guest's cart does not know it yet, so the binding
 * waits until an e-mail is known (checkout checks it in full).
 */
add_filter('woocommerce_coupon_get_email_restrictions', 'ms_np_loyalty_guest_restrictions', 10, 2);
function ms_np_loyalty_guest_restrictions($emails, $coupon)
{
    if (!$coupon || $coupon->get_meta('_ms_np_loyalty') !== '1' || is_admin() || !function_exists('WC') || !WC()->customer) {
        return $emails;
    }
    $known = WC()->customer->get_billing_email() ?: (is_user_logged_in() ? wp_get_current_user()->user_email : '');
    return $known ? $emails : [];
}

// ------------------------------------------------------------------------------ offers

/**
 * Everything the shop sells for NeonPlan 3D (cached 10 minutes): published, visible products with a
 * _ms_np_key and a price. Each: keys (one pack, or several for a bundle) and what NeonPlan 3D shows.
 */
function ms_np_all_offers(): array
{
    $cached = get_transient('ms_np_offers');
    if (is_array($cached)) {
        return $cached;
    }
    $ids = get_posts([
        'post_type' => 'product',
        'post_status' => 'publish',
        'numberposts' => 200,
        'fields' => 'ids',
        'meta_query' => [['key' => '_ms_np_key', 'compare' => 'EXISTS']],
    ]);
    $out = [];
    $new_after = time() - MS_NP_NEW_DAYS * DAY_IN_SECONDS;
    foreach ($ids as $id) {
        $product = wc_get_product($id);
        if (!$product || $product->get_catalog_visibility() === 'hidden' || (float) $product->get_price() <= 0) {
            continue;
        }
        $keys = array_values(array_filter(array_map('trim', explode(',', (string) $product->get_meta('_ms_np_key')))));
        if (!$keys) {
            continue;
        }
        $image = $product->get_image_id() ? wp_get_attachment_image_url($product->get_image_id(), 'medium_large') : '';
        $created = $product->get_date_created();
        $out[] = [
            'keys' => $keys,
            'id' => count($keys) > 1 ? 'bundle-' . $id : $keys[0],
            'name' => mb_substr($product->get_name(), 0, 80),
            // an own teaser (_ms_np_teaser) wins over the short description
            'teaser' => mb_substr(trim(wp_strip_all_tags((string) ($product->get_meta('_ms_np_teaser') ?: $product->get_short_description()))), 0, 200),
            'image' => is_string($image) && strpos($image, 'https://') === 0 ? $image : null,
            'url' => (string) get_permalink($id),
            'kind' => count($keys) > 1 ? 'bundle' : (strpos($keys[0], 'pro_') === 0 ? 'pro' : 'pack'),
            'price' => trim(html_entity_decode(wp_strip_all_tags(wc_price((float) $product->get_price())), ENT_QUOTES, 'UTF-8')),
            // _ms_np_new = 1 / 0 sets "new" by hand; without it the product's age decides
            'new' => $product->meta_exists('_ms_np_new') ? $product->get_meta('_ms_np_new') === '1' : ($created && $created->getTimestamp() > $new_after),
        ];
    }
    set_transient('ms_np_offers', $out, 10 * MINUTE_IN_SECONDS);
    return $out;
}

/** The offers a customer does not own yet (a bundle while one of its packs is missing). */
function ms_np_offers_for(array $owned): array
{
    $out = [];
    foreach (ms_np_all_offers() as $offer) {
        if (!array_diff($offer['keys'], $owned)) {
            continue;
        }
        unset($offer['keys']);
        $out[] = $offer;
    }
    return $out;
}

// ------------------------------------------------------------------------------ REST

add_action('rest_api_init', function (): void {
    register_rest_route('neonplan/v1', '/catalog', [
        'methods' => 'POST',
        'callback' => 'ms_np_rest_catalog',
        'permission_callback' => '__return_true',
    ]);
    register_rest_route('neonplan/v1', '/pack', [
        'methods' => 'POST',
        'callback' => 'ms_np_rest_pack',
        'permission_callback' => '__return_true',
    ]);
});

/** Validates key and instance of a request; returns [owner, key, instance] or a WP_Error. */
function ms_np_rest_auth(WP_REST_Request $req)
{
    $key = strtoupper(trim((string) $req->get_param('key')));
    $instance = strtolower(trim((string) $req->get_param('instance')));
    // the client's own address, also behind a proxy (first address of X-Forwarded-For)
    $ip = (string) ($_SERVER['REMOTE_ADDR'] ?? '');
    $fwd = (string) ($_SERVER['HTTP_X_FORWARDED_FOR'] ?? '');
    if ($fwd !== '') {
        $ip = trim(explode(',', $fwd)[0]);
    }
    // counted per licence key (one customer) and, more generously, per address
    foreach ([['ms_np_rate_key_' . md5($key), MS_NP_RATE_LIMIT], ['ms_np_rate_' . md5($ip), MS_NP_RATE_LIMIT_IP]] as [$bucket, $limit]) {
        $count = (int) get_transient($bucket);
        if ($count >= $limit) {
            return new WP_Error('ms_np_rate_limit', 'Too many requests', ['status' => 429]);
        }
        set_transient($bucket, $count + 1, HOUR_IN_SECONDS);
    }
    if (!preg_match('/^NP(-[A-Z0-9]{4}){4}$/', $key) || !preg_match('/^[0-9a-f]{16}$/', $instance)) {
        return new WP_Error('ms_np_invalid_key', 'Unknown key', ['status' => 404]);
    }
    $owner = ms_np_find_license($key);
    if (!$owner) {
        return new WP_Error('ms_np_invalid_key', 'Unknown key', ['status' => 404]);
    }
    if (!ms_np_bind_instance($owner, $instance)) {
        return new WP_Error('ms_np_activation_limit', 'This key is already bound to the allowed number of installations', ['status' => 403]);
    }
    return [$owner, $key, $instance];
}

function ms_np_rest_catalog(WP_REST_Request $req)
{
    $auth = ms_np_rest_auth($req);
    if (is_wp_error($auth)) {
        return $auth;
    }
    [$owner] = $auth;
    $packs = [];
    $owned = ms_np_owned_pack_keys($owner);
    foreach ($owned as $pack_key) {
        $meta = ms_np_pack_meta($pack_key);
        if ($meta) {
            $packs[] = ['id' => $meta['id'], 'name' => $meta['name'], 'release' => $meta['release'], 'url' => ms_np_pack_url($pack_key)];
        }
    }
    $coupon = ms_np_ensure_coupon($owner);
    return new WP_REST_Response([
        'licensee' => mb_substr($owner['name'], 0, 80),
        'packs' => $packs,
        'offers' => ms_np_offers_for($owned),
        'loyalty' => $coupon !== '' ? ['code' => $coupon, 'percent' => MS_NP_LOYALTY_PERCENT] : null,
    ]);
}

function ms_np_rest_pack(WP_REST_Request $req)
{
    $auth = ms_np_rest_auth($req);
    if (is_wp_error($auth)) {
        return $auth;
    }
    [$owner, , $instance] = $auth;
    $wanted = (string) $req->get_param('pack');
    foreach (ms_np_owned_pack_keys($owner) as $pack_key) {
        $meta = ms_np_pack_meta($pack_key);
        if (!$meta || $meta['id'] !== $wanted) {
            continue;
        }
        $body = ms_np_signed_pack($pack_key, mb_substr($owner['name'], 0, 80), $instance);
        if ($body === null) {
            return new WP_Error('ms_np_not_found', 'Pack file missing', ['status' => 404]);
        }
        nocache_headers();
        header('Content-Type: application/json; charset=utf-8');
        header('Content-Length: ' . strlen($body));
        echo $body;
        exit;
    }
    return new WP_Error('ms_np_not_owned', 'This pack is not in the account', ['status' => 403]);
}

/** The pack file signed for a buyer and (optionally) an installation; null without seed or template. */
function ms_np_signed_pack(string $pack_key, string $name, ?string $instance): ?string
{
    if (!defined('MS_NP_SIGNING_SEED') || !function_exists('sodium_crypto_sign_seed_keypair')) {
        return null;
    }
    $uploads = wp_upload_dir();
    $template = trailingslashit($uploads['basedir']) . MS_NP_UPLOAD_DIR . '/' . $pack_key . '.canonical.json';
    if (!is_readable($template)) {
        return null;
    }
    $payload = ms_np_put_licensee((string) file_get_contents($template), $name);
    if ($payload === null) {
        return null;
    }
    if ($instance !== null) {
        $payload = ms_np_put_instance($payload, $instance);
        if ($payload === null) {
            return null;
        }
    }
    $seed = base64_decode(MS_NP_SIGNING_SEED, true);
    if ($seed === false || strlen($seed) !== SODIUM_CRYPTO_SIGN_SEEDBYTES) {
        return null;
    }
    $keypair = sodium_crypto_sign_seed_keypair($seed);
    $sig = sodium_crypto_sign_detached($payload, sodium_crypto_sign_secretkey($keypair));
    return '{"payload":' . $payload . ',"signature":{"key":"' . MS_NP_KEY_ID . '","sig":"' . base64_encode($sig) . '"}}';
}

/**
 * Puts the installation's fingerprint into the canonical template: the LAST "instance":null belongs
 * to the pack itself (items come after it, but carry no such key). Templates made before binding
 * existed have no marker: they stay unbound.
 */
function ms_np_put_instance(string $canonical, string $instance): ?string
{
    if (!preg_match('/^[0-9a-f]{16}$/', $instance)) {
        return null;
    }
    $marker = '"instance":null';
    $at = strrpos($canonical, $marker);
    if ($at === false) {
        return $canonical;
    }
    return substr($canonical, 0, $at) . '"instance":"' . $instance . '"' . substr($canonical, $at + strlen($marker));
}
