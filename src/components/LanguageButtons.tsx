import React from 'react'
import Language, { flagForLanguage } from 'models/Language'
import AppStore from 'stores/AppStore'
import { classnames } from 'classnames/tailwind'

const container = classnames(
  'flex',
  'flex-row',
  'items-center',
  'justify-center',
  'mb-4'
)
const languageButton = classnames(
  'py-2',
  'px-4',
  'focus:outline-none',
  'mx-1',
  'text-4xl',
  'rounded',
  'hover:bg-green-button-start',
  'text-white'
)

export default function LanguageButtons() {
  return (
    <div className={container}>
      {Object.values(Language).map((k) => (
        <button
          className={languageButton}
          key={k}
          onClick={() => {
            AppStore.language = k
          }}
        >
          {flagForLanguage(k)}
        </button>
      ))}
    </div>
  )
}
