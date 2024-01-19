import { Hero } from './components/HeroContainer'
import { OurCoffees } from './components/OurCoffees'
import { HomeContainer } from './styles'

export const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <OurCoffees />
    </HomeContainer>
  )
}
