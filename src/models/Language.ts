enum Language {
  en = 'en',
  ru = 'ru',
  uk = 'uk',
  de = 'de',
  pl = 'pl',
}

export function flagForLanguage(language: Language) {
  switch (language) {
    case Language.en:
      return 'π¬π§'
    case Language.ru:
      return 'π·πΊ'
    case Language.uk:
      return 'πΊπ¦'
    case Language.de:
      return 'π©πͺ'
    case Language.pl:
      return 'π΅π±'
  }
}

export default Language
