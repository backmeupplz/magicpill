import { classnames } from 'classnames/tailwind'
import React, { FC } from 'react'
import { FormattedMessage } from 'react-intl'

type SubscriptionButtonProps = {
  onClick: () => void
}

const buttonStyle = classnames(
  'border',
  'p-4',
  'min-w-full',
  'rounded',
  'border-green-source',
  'text-green-source',
  'font-bold',
  'focus:outline-none',
  'bg-gradient-to-b',
  'from-green-button-start',
  'to-green-button-end',
  'hover:text-white',
  'hover:bg-green-button-start'
)

const SubscriptionButton: FC<SubscriptionButtonProps> = ({ onClick }) => {
  return (
    <button className={buttonStyle} onClick={onClick}>
      <FormattedMessage id="subscribe" />
    </button>
  )
}

export default SubscriptionButton
