import React, { FC } from 'react'
import Language from 'models/Language'
import { IntlProvider as BaseIntlProvider } from 'react-intl'
import { observer } from 'mobx-react-lite'
import AppStore from 'stores/AppStore'
import en from 'i18n/locales/en.json'
import ru from 'i18n/locales/ru.json'
import uk from 'i18n/locales/uk.json'
import de from 'i18n/locales/de.json'
import pl from 'i18n/locales/pl.json'

const messages = {
  en,
  ru,
  uk,
  de,
  pl,
}

const IntlProvider: FC = ({ children }) => {
  return (
    <BaseIntlProvider
      locale={AppStore.language}
      defaultLocale={Language.en}
      messages={messages[AppStore.language]}
    >
      {children}
    </BaseIntlProvider>
  )
}

export default observer(IntlProvider)
