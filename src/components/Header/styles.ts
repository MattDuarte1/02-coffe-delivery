import styled, { css } from 'styled-components'
import { mixins } from '../../styles/mixins'

export const HeaderContainer = styled.header`
  padding: 3.2rem 2rem;

  nav {
    margin: 0 auto;
    width: min(100%, 112rem);
    display: flex;
    justify-content: space-between;
    align-items: center;

    > div {
      display: flex;
      gap: 1.2rem;
    }
  }
`

const BaseButton = styled.button`
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 0;

  border-radius: 6px;
  cursor: pointer;
`
export const LocationButton = styled(BaseButton)`
  background: ${({ theme }) => theme.colors['purple-light']};
  color: ${({ theme }) => theme.colors['purple-dark']};
  border: 1px solid transparent;

  ${mixins.fonts.textS}

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.purple};
  }
`

interface CartButtonProps {
  $quantity?: string
}

export const CartButton = styled(BaseButton)<CartButtonProps>`
  background: ${({ theme }) => theme.colors['yellow-light']};
  color: ${({ theme }) => theme.colors['yellow-dark']};
  border: 1px solid transparent;
  position: relative;

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
  }

  ${({ $quantity }) =>
    Number($quantity) > 0 &&
    css`
      &::after {
        content: '${$quantity}';
        position: absolute;
        top: -0.8rem;
        right: -0.8rem;
        overflow: hidden;
        width: 2rem;
        height: 2rem;
        border-radius: 999px;
        background: ${({ theme }) => theme.colors['yellow-dark']};
        display: flex;
        justify-content: center;
        align-items: center;

        color: ${({ theme }) => theme.colors.white};
        font-size: 1.2rem;
        font-weight: 800;
        letter-spacing: -0.72px;
        text-align: center;
      }
    `}
`
