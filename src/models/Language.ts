enum Language {
  en = 'en',
  ru = 'ru',
  uk = 'uk',
  de = 'de',
}

export function flagForLanguage(language: Language) {
  switch (language) {
    case Language.en:
      return '🇬🇧'
    case Language.ru:
      return '🇷🇺'
    case Language.uk:
      return '🇺🇦'
    case Language.de:
      return '🇩🇪'
  }
}

export default Language
