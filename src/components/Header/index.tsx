import { CartButton, HeaderContainer, LocationButton } from './styles'
import coffeLogo from '../../assets/logo.svg'
import { MapPin } from '@phosphor-icons/react'
import { ShoppingCart } from '@phosphor-icons/react/dist/ssr'
import { useCart } from '../../hooks/useCart'
import { Link } from 'react-router-dom'

export const Header = () => {
  const { cartItemsState } = useCart()

  const totalCarts = String(cartItemsState.length)
  return (
    <HeaderContainer>
      <nav>
        <Link to={'/'}>
          <img src={coffeLogo} alt="Coffe Delivery Logo" />
        </Link>
        <div>
          <Link to={'/'}>
            <LocationButton>
              <MapPin size={22} weight="fill" />
              Porto Alegre, RS
            </LocationButton>
          </Link>
          <Link to={'/checkout'}>
            <CartButton $quantity={totalCarts}>
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </Link>
        </div>
      </nav>
    </HeaderContainer>
  )
}
