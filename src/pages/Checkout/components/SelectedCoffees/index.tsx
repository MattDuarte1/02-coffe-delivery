import { SelectedCoffeesContainer, SelectedCoffesContent } from './styles'
import { TitleContainer } from '../../styles'
import { CoffeCartCard } from './CoffeCartCard'
import { CoffeOrderConfirm } from './CoffeOrderConfirm'
import { useCart } from '../../../../hooks/useCart'

export const SelectedCoffees = () => {
  const {
    cartItemsState,
    showQuantityTotalInCart,
    markQuantityCoffee,
    removeCoffeInCart,
  } = useCart()

  return (
    <SelectedCoffeesContainer>
      <TitleContainer>Cafés Selecionados</TitleContainer>
      <SelectedCoffesContent>
        {cartItemsState.map((cart) => (
          <CoffeCartCard
            key={cart.id}
            id={cart.id}
            title={cart.title}
            price={cart.price}
            quantity={cart.quantity}
            srcImage={cart.image}
            changeQuantityCoffe={markQuantityCoffee}
            removeCoffeInCart={removeCoffeInCart}
          />
        ))}
        <CoffeOrderConfirm totalItemsPrice={showQuantityTotalInCart()} />
      </SelectedCoffesContent>
    </SelectedCoffeesContainer>
  )
}
