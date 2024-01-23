import styled from 'styled-components'
import { mixins } from '../../../../../styles/mixins'

export const CoffeOrderConfirmContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-direction: column;
  width: 100%;
  height: 100%;

  > button {
    border: 0;
    border-radius: 0.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0.8rem;
    background: ${({ theme }) => theme.colors.yellow};

    ${mixins.fonts.buttonG}
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;

    &:hover {
      background: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`

export const CoffeOrderRowInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    ${mixins.fonts.textS}
  }
  span:last-child {
    font-size: 1.6rem;
  }

  strong {
    ${mixins.fonts.textL}
    font-weight: 700;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }
`
