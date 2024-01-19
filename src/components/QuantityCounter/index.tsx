import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityCounterContainer } from './styles'

interface QuantityCounterProps {
  quantity: number
  quantityChangeFunction: (operation: 'increase' | 'decrease') => void
}
export const QuantityCounter = ({
  quantity,
  quantityChangeFunction,
}: QuantityCounterProps) => {
  return (
    <QuantityCounterContainer>
      <button onClick={() => quantityChangeFunction('decrease')}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button onClick={() => quantityChangeFunction('increase')}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityCounterContainer>
  )
}
