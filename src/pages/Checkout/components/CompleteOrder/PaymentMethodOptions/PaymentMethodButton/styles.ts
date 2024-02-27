import styled, { css } from 'styled-components'
import { mixins } from '../../../../../../styles/mixins'

interface ContentContainerProps {
  $haserror: string
}

export const PaymentMethodContainer = styled.li`
  width: min(100%, 17.8rem);
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors['purple-light']};
      border-color: ${theme.colors.purple};

      &:hover {
        background: ${theme.colors['purple-light']};
      }
    `}
  }
`

export const ContentContainer = styled.div<ContentContainerProps>`
  padding: 1.6rem;
  background: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  text-transform: uppercase;
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  transition: 0.4s;
  cursor: pointer;

  ${mixins.fonts.buttonM}

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background: ${({ theme }) => theme.colors['base-hover']};
  }

  user-select: none;

  ${({ $haserror }) => {
    if ($haserror === 'true') {
      return css`
        border: 1px solid rgba(231, 14, 2, 0.7);
      `
    }
  }}
`
