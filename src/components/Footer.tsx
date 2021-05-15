import React from 'react'
import { classnames } from 'classnames/tailwind'

const text = classnames('text-white', 'text-center')
const link = classnames('text-green-source')

function Footer() {
  return (
    <p className={text}>
      Спасибо, что дочитали до конца! Код этого сайта{' '}
      <a
        className={link}
        target="_blank"
        rel="noreferrer"
        href="https://github.com/backmeupplz/magicpill"
      >
        открыт
      </a>
      . Сайт создан{' '}
      <a
        className={link}
        target="_blank"
        rel="noreferrer"
        href="https://t.me/borodutch"
      >
        @borodutch
      </a>{' '}
      и{' '}
      <a
        className={link}
        target="_blank"
        rel="noreferrer"
        href="https://t.me/purplesoop"
      >
        @purplesoop
      </a>{' '}
      с любовью.
    </p>
  )
}

export default Footer
