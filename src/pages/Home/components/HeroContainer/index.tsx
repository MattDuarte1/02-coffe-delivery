import {
  HeroContainer,
  HeroContent,
  HeroDescription,
  HeroImage,
} from './styles'
import coffeBanner from '../../../../assets/hero.svg'
import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react'
import { InfoItemWithIcon } from '../InfoItemWithIcon'

export const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroDescription>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
          <footer>
            <InfoItemWithIcon
              icon={<ShoppingCart weight="fill" />}
              iconBgColor="yellow-dark"
              text="Compra simples e segura"
            />
            <InfoItemWithIcon
              icon={<Package weight="fill" />}
              iconBgColor="base-text"
              text="Embalagem mantém o café intacto"
            />
            <InfoItemWithIcon
              icon={<Timer weight="fill" />}
              iconBgColor="yellow"
              text="Entrega rápida e rastreada"
            />
            <InfoItemWithIcon
              icon={<Coffee weight="fill" />}
              iconBgColor="purple"
              text="O café chega fresquinho até você"
            />
          </footer>
        </HeroDescription>
        <HeroImage>
          <img src={coffeBanner} alt="Coffe Banner" />
        </HeroImage>
      </HeroContent>
    </HeroContainer>
  )
}
