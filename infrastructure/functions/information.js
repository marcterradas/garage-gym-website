import Languages from "@/infrastructure/constants/languages.json";

/**
 * @param {string} language
 * @returns {string | undefined}
 */
export function getLanguage(language) {
  return Languages[language];
}
