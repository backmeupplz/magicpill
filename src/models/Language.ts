enum Language {
  en = 'en',
  ru = 'ru',
  uk = 'uk',
}

export function flagForLanguage(language: Language) {
  switch (language) {
    case Language.en:
      return '🇬🇧'
    case Language.ru:
      return '🇷🇺'
    case Language.uk:
      return '🇺🇦'
  }
}

export default Language
