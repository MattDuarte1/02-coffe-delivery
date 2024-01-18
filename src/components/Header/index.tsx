import { CartButton, HeaderContainer, LocationButton } from './styles'
import coffeLogo from '../../assets/logo.svg'
import { MapPin } from '@phosphor-icons/react'
import { ShoppingCart } from '@phosphor-icons/react/dist/ssr'

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <a href="http://">
          <img src={coffeLogo} alt="Coffe Delivery Logo" />
        </a>
        <div>
          <a href="http://">
            <LocationButton>
              <MapPin size={22} weight="fill" />
              Porto Alegre, RS
            </LocationButton>
          </a>
          <a href="http://">
            <CartButton $quantity="3">
              <ShoppingCart size={22} weight="fill" />
            </CartButton>
          </a>
        </div>
      </nav>
    </HeaderContainer>
  )
}
