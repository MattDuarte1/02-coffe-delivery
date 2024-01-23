import { SelectedCoffeesContainer, SelectedCoffesContent } from './styles'
import { TitleContainer } from '../../styles'
import { CoffeCartCard } from './CoffeCartCard'
import { CoffeOrderConfirm } from './CoffeOrderConfirm'

export const SelectedCoffees = () => {
  return (
    <SelectedCoffeesContainer>
      <TitleContainer>Cafés Selecionados</TitleContainer>
      <SelectedCoffesContent>
        <CoffeCartCard />
        <CoffeCartCard />
        <CoffeOrderConfirm />
      </SelectedCoffesContent>
    </SelectedCoffeesContainer>
  )
}
