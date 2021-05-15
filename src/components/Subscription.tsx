import React, { FC, useState } from 'react'
import { classnames } from 'classnames/tailwind'
import SubscriptionButton from 'components/SubscriptionButton'
import { TierDescription } from 'models/Tier'

const container = classnames('rounded', 'my-4', 'bg-gradient-to-br', 'p-6')
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

type SubscriptionProps = {
  tier: TierDescription
}

const Subscription: FC<SubscriptionProps> = ({ tier }) => {
  const [isSelected, setIsSelected] = useState(false)

  return (
    <div className={classnames(container, ...tier.gradient)}>
      <div className={headerContainer}>
        <div>
          <p className={header}>{tier.title}</p>
          <p className={price}>ЦЕНА:</p>
        </div>
        <img className={image} src={`images/${tier.image}.png`} alt="avatar" />
      </div>
      <p className={subheader}>{tier.price}</p>
      <ul className={list}>
        {tier.benefits.map((benefit) => (
          <li key={benefit.title} className={bodyText}>
            {benefit.title}{' '}
            <a
              className={link}
              target="_blank"
              rel="noreferrer"
              href={benefit.source}
            >
              источник
            </a>
          </li>
        ))}
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
