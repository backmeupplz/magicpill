import React from 'react'
import Subscription from 'components/Subscription'
import { tiers } from 'models/Tier'

function Subscriptions() {
  return (
    <div>
      {Object.values(tiers).map((tier) => (
        <Subscription key={tier.title} tier={tier} />
      ))}
    </div>
  )
}

export default Subscriptions
