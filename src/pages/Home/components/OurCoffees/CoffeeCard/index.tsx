import { ShoppingCart } from '@phosphor-icons/react'
import { QuantityCounter } from '../../../../../components/QuantityCounter'
import { CoffeeCardTag } from './CoffeeCardTag'
import {
  CoffeeCardContainer,
  CoffeeCardLogo,
  CoffeeCardTagsList,
  CoffeeCardDescription,
  CoffeeCardFooter,
  AddCoffeeCartWrapper,
} from './styles'
import { ICoffee } from '../../../../../interfaces/coffee'
import { useState } from 'react'

type Operation = 'increase' | 'decrease'

interface CoffeeCardProps extends ICoffee {}
export const CoffeeCard = ({
  title,
  description,
  image,
  tags,
  price,
}: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState<number>(1)
  const formattedPrice = price.toFixed(2).replace('.', ',')

  const handleQuantityChange = (operation: Operation) => {
    const operations = {
      increase: () => setQuantity((current) => current + 1),
      decrease: () => setQuantity((current) => Math.max(current - 1, 1)),
    }

    operations[operation]()
  }

  return (
    <CoffeeCardContainer>
      <article>
        <CoffeeCardLogo>
          <img src={image} alt="coffe picture" />
        </CoffeeCardLogo>
        <CoffeeCardTagsList>
          {!!tags && tags.map((tag, i) => <CoffeeCardTag key={i} text={tag} />)}
        </CoffeeCardTagsList>
        <CoffeeCardDescription>
          <h3>{title}</h3>
          <p>{description}</p>
        </CoffeeCardDescription>

        <CoffeeCardFooter>
          <span>
            R$ <strong>{formattedPrice}</strong>
          </span>

          <AddCoffeeCartWrapper>
            <QuantityCounter
              quantity={quantity}
              quantityChangeFunction={handleQuantityChange}
            />
            <button>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </AddCoffeeCartWrapper>
        </CoffeeCardFooter>
      </article>
    </CoffeeCardContainer>
  )
}
