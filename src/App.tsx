import React from 'react'
import { BodyText, HeaderText, SubheaderText } from 'components/Text'
import IntlProvider from 'i18n/IntlProvider'
import LanguageButtons from 'components/LanguageButtons'
import { classnames } from 'classnames/tailwind'
import Subscription from 'components/Subscription'
import Root from 'components/Root'

const textBlock = classnames('my-6')
const subscriptionBlock = classnames('my-12')

const App = () => {
  return (
    <IntlProvider>
      <Root>
        <LanguageButtons />
        <HeaderText>Магическая пилюля</HeaderText>
        <SubheaderText>
          Представьте, что у вас есть лекарство, принимая которое раз в день, вы
          сильно уменьшите риски умереть
        </SubheaderText>
        <div className={textBlock}>
          <BodyText>
            А теперь представьте, что это лекарство абсолютно бесплатно и
            доступно всем! Звучит слишком хорошо, чтобы быть правдой.
          </BodyText>
          <BodyText>
            Однако наука однозначна. Нет никаких сомнений в том, что это
            магическое лекарство найдено. Простые изменения диеты могут спасти
            вас и ваших близких от топ-10 заболеваний, которые убивают людей по
            всему миру.
          </BodyText>
          <BodyText>
            Выберите "подписку на здоровье" ниже, которая подойдет вашей
            жизненной ситуации лучше всего. Чем элитнее подписка, тем меньше
            риски умереть.
          </BodyText>
          <BodyText>
            Не верьте на слово никому — всегда проверяйте исследования и читайте
            источники самостоятельно.
          </BodyText>
          <BodyText>
            Помните, как табачная индустрия пыталась доказать, что курение —
            полезно? Мы находимся точно в той же ситуации сейчас. Наука уже
            однозначна о вреде определенной группы продуктов, но до общества это
            еще не дошло.
          </BodyText>
        </div>
        <SubheaderText>
          Приведенные ниже бенефиты научно доказаны, мы добавили ссылки на
          реальные проверенные исследования
        </SubheaderText>
        <HeaderText>Подписки на здоровье</HeaderText>
        <div className={subscriptionBlock}>
          <Subscription />
          <Subscription />
          <Subscription />
        </div>
      </Root>
    </IntlProvider>
  )
}

export default App
