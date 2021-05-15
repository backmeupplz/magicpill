import { classnames } from 'classnames/tailwind';
import React, { useMemo, useState } from 'react'
import { FormattedMessage } from 'react-intl';

const defenitionsDictionary: Record<string, string> = {
  'processedMeat': 'processedMeatDefinition',
  'redMeat': 'redMeatDefinition',
  'unprocessedMeat': 'unprocessedMeatDefinition',
  'seafood': 'seafoodDefinition',
};

const tooltip = classnames(
  'rounded',
  'p-6',
  'bg-white',
  'w-72',
  'cursor-default',
  'shadow-md',
  'text-sm',
  'text-gray-900',
  'font-light',
)

const tooltipContainer = classnames(
  'absolute',
  'pb-5',
  '-translate-x-2/4',
  '-translate-y-full',
  'transition',
)

const tooltipInvisible = classnames(
  'opacity-0',
  'invisible',
)

const actionContainer = classnames(
  'cursor-help',
  'border-b-2',
  'border-dotted',
  'border-gray-400'
)

type Position = { x: number, y: number }

interface TooltipProps {
  id: string
  position: Position | null
}

const Tooltip: React.FC<TooltipProps> = ({ id, position }) => (
  <div
    className={`transform ${tooltipContainer} ${!position ? tooltipInvisible : ''}`}
    style={{ top: position?.y, left: position?.x }}
  >
    <div className={tooltip}>
      <FormattedMessage id={id} />
    </div>
  </div>
)

interface FormattedMessageWithTooltipProps {
  id: string
}

const FormattedMessageWithTooltip: React.FC<FormattedMessageWithTooltipProps> = ({ id }) => {
  const [visibleForPosition, setVisibleForPosition] = useState<Position | null>(null)

  const message = useMemo(() => <FormattedMessage id={id} />, [id])
  
  if (!defenitionsDictionary[id]) {
    return message
  }

  return <span
    className={actionContainer}
    onMouseEnter={(e) => setVisibleForPosition({ x: e.nativeEvent.pageX, y: e.nativeEvent.pageY})}
    onMouseLeave={(e) => setVisibleForPosition(null)}
  >
    <Tooltip position={visibleForPosition} id={defenitionsDictionary[id]} />
    {message}
  </span>
}

export default FormattedMessageWithTooltip
