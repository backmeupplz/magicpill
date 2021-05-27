import React from 'react'
import Subscription from 'components/Subscription'
import { tiers } from 'models/Tier'

function Subscriptions() {
  return (
    <div>
      {Object.values(tiers).map((tier, i) => (
        <Subscription key={i} tier={tier} />
      ))}
    </div>
  )
}

export default Subscriptions
