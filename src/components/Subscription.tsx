import React, { FC, useState } from 'react'
import { classnames } from 'classnames/tailwind'
import SubscriptionButton from 'components/SubscriptionButton'
import Tier, { TierDescription } from 'models/Tier'
import { FormattedMessage } from 'react-intl'

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
          <p className={header}>
            <FormattedMessage id={`${tier.title}Title`} />
          </p>
          <p className={price}>
            <FormattedMessage id="price" />:
          </p>
        </div>
        <img className={image} src={`images/${tier.title}.png`} alt="avatar" />
      </div>
      <p className={subheader}>
        <FormattedMessage id={`${tier.title}Price`} />
      </p>
      <ul className={list}>
        {tier.title !== Tier.bronze && (
          <li className={bodyText}>
            <FormattedMessage id="allAbove" />
          </li>
        )}
        {tier.benefits.map((benefit, i) => (
          <li key={i} className={bodyText}>
            <FormattedMessage id={`${tier.title}Benefit${i}`} />{' '}
            <a className={link} target="_blank" rel="noreferrer" href={benefit}>
              <FormattedMessage id="source" />
            </a>
          </li>
        ))}
      </ul>
      {isSelected ? (
        <p className={bodyText}>
          <FormattedMessage id="subscribed" />
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
