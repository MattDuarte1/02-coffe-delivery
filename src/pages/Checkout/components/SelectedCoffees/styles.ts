import styled from 'styled-components'
import { BaseStyleContainer } from '../../styles'

export const SelectedCoffeesContainer = styled.div`
  width: min(100%, 44.8rem);

  @media (max-width: 1143px) {
    width: min(100%, 64rem);
  }
`

export const SelectedCoffesContent = styled(BaseStyleContainer)`
  border-top-right-radius: 4.4rem;
  border-bottom-right-radius: 0.6rem;
  border-bottom-left-radius: 4.4rem;
`
