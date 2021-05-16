import React from 'react'
import { BodyText, HeaderText, SubheaderText } from 'components/Text'
import IntlProvider from 'i18n/IntlProvider'
import LanguageButtons from 'components/LanguageButtons'
import { classnames } from 'classnames/tailwind'
import Root from 'components/Root'
import Footer from 'components/Footer'
import Subscriptions from 'components/Subscriptions'
import { FormattedMessage } from 'react-intl'
import ReactTooltip from 'react-tooltip'

const textBlock = classnames('my-6')
const subscriptionBlock = classnames('my-12')
const tooltip = classnames(
  'w-72',
  'rounded',
)

const App = () => {
  return (
    <IntlProvider>
      <ReactTooltip className={tooltip} textColor="black" backgroundColor="white" />
      <Root>
        <LanguageButtons />
        <HeaderText>
          <FormattedMessage id="title" />
        </HeaderText>
        <SubheaderText>
          <FormattedMessage id="subtitle" />
        </SubheaderText>
        <div className={textBlock}>
          {[0, 1, 2, 3, 4].map((v) => (
            <BodyText key={v}>
              <FormattedMessage id={`description${v}`} />
            </BodyText>
          ))}
        </div>
        <SubheaderText>
          <FormattedMessage id="subdescription" />
        </SubheaderText>
        <HeaderText>
          <FormattedMessage id="subscriptions" />
        </HeaderText>
        <div className={subscriptionBlock}>
          <Subscriptions />
        </div>
        <Footer />
      </Root>
    </IntlProvider>
  )
}

export default App
