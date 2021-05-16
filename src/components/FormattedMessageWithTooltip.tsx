import { classnames } from 'classnames/tailwind'
import React from 'react'
import { FormattedMessage, useIntl } from 'react-intl'

const defenitionsDictionary: Record<string, string> = {
  'processedMeat': 'processedMeatDefinition',
  'redMeat': 'redMeatDefinition',
  'unprocessedMeat': 'unprocessedMeatDefinition',
  'seafood': 'seafoodDefinition',
};

const actionContainer = classnames(
  'cursor-help',
  'border-b-2',
  'border-dotted',
  'border-gray-400'
)

type FormattedMessageWithTooltipProps = {
  id: string
}

const FormattedMessageWithTooltip: React.FC<FormattedMessageWithTooltipProps> = ({ id }) => {
  const intl = useIntl()
  const message = <FormattedMessage id={id} />
  
  if (!defenitionsDictionary[id]) {
    return message
  }

  return <span
    className={actionContainer}
    data-tip={intl.formatMessage({ id: defenitionsDictionary[id] })}
  >
    {message}
  </span>
}

export default FormattedMessageWithTooltip
