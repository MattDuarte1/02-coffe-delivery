import styled from 'styled-components'
import { mixins } from '../../../../../styles/mixins'

export const CoffeCartCardContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 2rem;

  > p {
    color: ${({ theme }) => theme.colors['base-text']};
    margin-left: auto;
    ${mixins.fonts.textM}
    font-weight: 700;
  }

  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
  padding-bottom: 2rem;
  margin-bottom: 3rem;
`

export const CoffeCardLogo = styled.div`
  width: min(100%, 6.4rem);
  height: 100%;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CoffeCartCardSettings = styled.div`
  min-width: 17.1rem;

  > p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    ${mixins.fonts.textM}
  }
  > div {
    display: flex;
    gap: 0.8rem;

    > button {
      padding: 0 0.8rem;
      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({ theme }) => theme.colors['base-text']};
      background: ${({ theme }) => theme.colors['base-hover']};
      ${mixins.fonts.buttonM}
      border: 0;
      border-radius: 0.6rem;
      text-transform: uppercase;
      cursor: pointer;

      svg {
        color: ${({ theme }) => theme.colors.purple};
      }
    }
  }

  display: flex;
  flex-direction: column;
`
