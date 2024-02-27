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
import { useCart } from '../../../../../hooks/useCart'
import { useState } from 'react'
import { formatMoney } from '../../../../../utils/formatMoney'

interface CoffeeCardProps {
  coffee: ICoffee
}

type Operation = 'increase' | 'decrease'

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const formattedPrice = formatMoney(coffee.price)
  const { createNewCoffeToCart } = useCart()
  const [quantity, setQuantity] = useState<number>(1)

  const handleQuantityChange = (operation: Operation) => {
    const operations = {
      increase: () => setQuantity((current) => current + 1),
      decrease: () => setQuantity((current) => Math.max(current - 1, 1)),
    }

    operations[operation]()
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    }

    createNewCoffeToCart(coffeeToAdd)
    setQuantity(1)
  }

  return (
    <CoffeeCardContainer>
      <article>
        <CoffeeCardLogo>
          <img src={coffee.image} alt="coffe picture" />
        </CoffeeCardLogo>
        <CoffeeCardTagsList>
          {!!coffee.tags &&
            coffee.tags.map((tag, i) => <CoffeeCardTag key={i} text={tag} />)}
        </CoffeeCardTagsList>
        <CoffeeCardDescription>
          <h3>{coffee.title}</h3>
          <p>{coffee.description}</p>
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
            <button onClick={handleAddToCart}>
              <ShoppingCart size={22} weight="fill" />
            </button>
          </AddCoffeeCartWrapper>
        </CoffeeCardFooter>
      </article>
    </CoffeeCardContainer>
  )
}
