import { Trash } from '@phosphor-icons/react'
import { QuantityCounter } from '../../../../../components/QuantityCounter'
import {
  CoffeCartCardContainer,
  CoffeCardLogo,
  CoffeCartCardSettings,
} from './styles'

export const CoffeCartCard = () => {
  return (
    <CoffeCartCardContainer>
      <CoffeCardLogo>
        <img src="/coffees/arabe.svg" alt="cafe" />
      </CoffeCardLogo>
      <CoffeCartCardSettings>
        <p>Expresso Tradicional</p>
        <div>
          <QuantityCounter quantity={1} quantityChangeFunction={() => {}} />
          <button>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </CoffeCartCardSettings>
      <p>R$ 9,90</p>
    </CoffeCartCardContainer>
  )
}
