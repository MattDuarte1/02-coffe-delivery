import { Trash } from '@phosphor-icons/react'
import { QuantityCounter } from '../../../../../components/QuantityCounter'
import {
  CoffeCartCardContainer,
  CoffeCardLogo,
  CoffeCartCardSettings,
} from './styles'
import { formatMoney } from '../../../../../utils/formatMoney'
import { Operation } from '../../../../../interfaces/operation'

interface CoffeCartCardProps {
  id: string
  title: string
  price: number
  quantity: number
  srcImage: string
  changeQuantityCoffe: (coffeId: string, operation: Operation) => void
  removeCoffeInCart: (coffeId: string) => void
}

export const CoffeCartCard = ({
  id,
  title,
  price,
  quantity,
  srcImage,
  changeQuantityCoffe,
  removeCoffeInCart,
}: CoffeCartCardProps) => {
  const formattedPrice = formatMoney(price)

  const handleChangeQuantityCoffe = (operation: Operation) => {
    changeQuantityCoffe(id, operation)
  }

  const handleRemoveCoffeInCart = () => {
    removeCoffeInCart(id)
  }

  return (
    <CoffeCartCardContainer>
      <CoffeCardLogo>
        <img src={srcImage} alt="cafe" />
      </CoffeCardLogo>
      <CoffeCartCardSettings>
        <p>{title}</p>
        <div>
          <QuantityCounter
            quantity={quantity}
            quantityChangeFunction={handleChangeQuantityCoffe}
          />
          <button type="button" onClick={handleRemoveCoffeInCart}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </CoffeCartCardSettings>
      <p>R$ {formattedPrice}</p>
    </CoffeCartCardContainer>
  )
}
