import React, { useState } from 'react'
import { classnames } from 'classnames/tailwind'
import SubscriptionButton from 'components/SubscriptionButton'

const container = classnames(
  'rounded',
  'my-4',
  'bg-gradient-to-br',
  'from-bronze-semifull',
  'to-bronze-semitransparent',
  'p-6'
)
const headerContainer = classnames(
  'flex',
  'flex-row',
  'items-start',
  'justify-between',
  'mb-4'
)
const header = classnames(
  'text-2xl',
  'md:text-4xl',
  'font-bold',
  'text-bronze-full',
  'mb-2'
)
const subheader = classnames(
  'text-xl',
  'md:text-2xl',
  'font-bold',
  'text-white'
)
const price = classnames('text-gray-300')
const image = classnames('w-20')
const link = classnames('text-green-source')
const bodyText = classnames('text-white')
const list = classnames('list-inside', 'list-disc', 'my-6')

function Subscription() {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className={container}>
      <div className={headerContainer}>
        <div>
          <p className={header}>Бронза</p>
          <p className={price}>ЦЕНА:</p>
        </div>
        <img className={image} src="images/bronze.png" alt="avatar" />
      </div>
      <p className={subheader}>
        Отказ от переработанного мяса (в том числе птицы)
      </p>
      <ul className={list}>
        <li className={bodyText}>
          Снижение риска ишемической болезни сердца на 84%{' '}
          <a
            className={link}
            target="_blank"
            rel="noreferrer"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430/"
          >
            источник
          </a>
        </li>
        <li className={bodyText}>
          Снижение риска диабета II типа на 51%{' '}
          <a
            className={link}
            target="_blank"
            rel="noreferrer"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3483430/"
          >
            источник
          </a>
        </li>
        <li className={bodyText}>
          Снижение риска колоректального рака на 35%{' '}
          <a
            className={link}
            target="_blank"
            rel="noreferrer"
            href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2661797/"
          >
            источник
          </a>
        </li>
      </ul>
      {isSelected ? (
        <p className={bodyText}>
          На самом деле, подписка абсолютно бесплатна! Просто откажитесь от
          продуктов, перечисленных выше, и вы получите все обещанные бенефиты!
        </p>
      ) : (
        <SubscriptionButton
          onClick={() => {
            setIsSelected(true)
          }}
        />
      )}
    </div>
  )
}

export default Subscription
