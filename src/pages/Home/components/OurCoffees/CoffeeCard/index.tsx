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
import { useCart } from '../../../../../hooks/useCart'

type Operation = 'increase' | 'decrease'

interface CoffeeCardProps {
  coffee: ICoffee
}
export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {
  const [quantity, setQuantity] = useState<number>(1)
  const formattedPrice = coffee.price.toFixed(2).replace('.', ',')
  const { addCoffeeToCart } = useCart()

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

    addCoffeeToCart(coffeeToAdd)
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
