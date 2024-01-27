import { SelectedCoffeesContainer, SelectedCoffesContent } from './styles'
import { TitleContainer } from '../../styles'
import { CoffeCartCard } from './CoffeCartCard'
import { CoffeOrderConfirm } from './CoffeOrderConfirm'
import { useCart } from '../../../../hooks/useCart'
import { formatMoney } from '../../../../utils/formatMoney'

export const SelectedCoffees = () => {
  const { cartItems, cartItemsTotalQuantity } = useCart()
  const formattedTotalCartPrice = formatMoney(cartItemsTotalQuantity)
  return (
    <SelectedCoffeesContainer>
      <TitleContainer>Cafés Selecionados</TitleContainer>
      <SelectedCoffesContent>
        {cartItems.map((cart) => (
          <CoffeCartCard key={cart.id} />
        ))}
        <CoffeOrderConfirm totalItemsPrice={formattedTotalCartPrice} />
      </SelectedCoffesContent>
    </SelectedCoffeesContainer>
  )
}
