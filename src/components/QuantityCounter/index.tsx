import { Minus, Plus } from '@phosphor-icons/react'
import { QuantityCounterContainer } from './styles'
import { Operation } from '../../interfaces/operation'

interface QuantityCounterProps {
  quantity: number
  quantityChangeFunction: (operation: Operation) => void
}
export const QuantityCounter = ({
  quantity,
  quantityChangeFunction,
}: QuantityCounterProps) => {
  return (
    <QuantityCounterContainer>
      <button type="button" onClick={() => quantityChangeFunction('decrease')}>
        <Minus size={14} weight="bold" />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={() => quantityChangeFunction('increase')}>
        <Plus size={14} weight="bold" />
      </button>
    </QuantityCounterContainer>
  )
}
