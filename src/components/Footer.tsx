import React from 'react'
import { classnames } from 'classnames/tailwind'
import { FormattedMessage } from 'react-intl'

const text = classnames('text-white', 'text-center')
const link = classnames('text-green-source')

function Footer() {
  return (
    <p className={text}>
      <FormattedMessage id="footer0" />
      <a
        className={link}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/backmeupplz/magicpill"
      >
        <FormattedMessage id="footer1" />
      </a>
      <FormattedMessage id="footer2" />
      <a
        className={link}
        target="_blank"
        rel="noreferrer"
        href="https://t.me/borodutch"
      >
        @borodutch
      </a>
      <FormattedMessage id="footer3" />
      <a
        className={link}
        target="_blank"
        rel="noreferrer"
        href="https://t.me/purplenoodlesoop"
      >
        @purplenoodlesoop
      </a>
      <FormattedMessage id="footer4" />
    </p>
  )
}

export default Footer
