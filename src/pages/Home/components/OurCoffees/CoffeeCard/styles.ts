import styled from 'styled-components'
import { mixins } from '../../../../../styles/mixins'

export const CoffeeCardContainer = styled.li`
  > article {
    padding: 0 2rem 2rem 2rem;
    background: ${({ theme }) => theme.colors['base-card']};

    display: flex;
    flex-direction: column;
    align-items: center;

    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;
  }
`

export const CoffeeCardLogo = styled.div`
  margin-top: -2rem;
  width: 12rem;

  > img {
    width: 100%;
    height: 100%;
  }
`

export const CoffeeCardTagsList = styled.ul`
  margin-top: 1.2rem;
  margin-bottom: 1.6rem;

  li + li {
    margin-left: 0.4rem;
  }
`

export const CoffeeCardDescription = styled.div`
  h3 {
    ${mixins.fonts.titleS}
    color: ${({ theme }) => theme.colors['base-subtitle']};
    text-align: center;
    margin-bottom: 0.8rem;
  }

  p {
    ${mixins.fonts.textS}
    text-align: center;
    color: ${({ theme }) => theme.colors['base-label']};
    height: 3.8rem;
    margin-bottom: 3.3rem;
  }
`

export const CoffeeCardFooter = styled.footer`
  width: min(100%, 20.8rem);
  height: 3.8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    ${mixins.fonts.textS}
    color:${({ theme }) => theme.colors['base-text']};
    text-align: center;
    > strong {
      ${mixins.fonts.titleM}
    }
  }
`

export const AddCoffeeCartWrapper = styled.div`
  width: min(100%, 11.8rem);
  max-height: 3.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  > button {
    padding: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.6rem;
    background: ${({ theme }) => theme.colors['purple-dark']};
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    border: 0;

    &:hover {
      background: ${({ theme }) => theme.colors.purple};
    }
  }
`
