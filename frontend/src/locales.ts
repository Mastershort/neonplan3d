export function isTraditionalChinese(language: string): boolean {
  const tag = language.toLowerCase();
  return tag === "zh-tw" || tag === "zh-hant" || tag.startsWith("zh-hant-");
}
