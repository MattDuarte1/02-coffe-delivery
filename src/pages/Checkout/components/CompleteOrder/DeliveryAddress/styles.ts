import styled from 'styled-components'
import { BaseStyleContainer } from '../../../styles'

export const DeliveryAddressContainer = styled(BaseStyleContainer)``

export const DeliveryAddressForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.6rem;

  > div {
    width: 100%;
    display: flex;

    gap: 1.2rem;
    align-items: center;

    @media (max-width: 642px) {
      flex-wrap: wrap;
    }
  }
`
