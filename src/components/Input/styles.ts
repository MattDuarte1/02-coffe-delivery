import styled, { css } from 'styled-components'
import { mixins } from '../../styles/mixins'

interface InputContainerProps {
  $hasOpcional: string
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  width: 100%;
  align-items: center;
  border-radius: 4px;
  position: relative;

  background: ${({ theme }) => theme.colors['base-input']};

  > input {
    flex: 1;
    border-radius: 4px;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors['base-button']};
    color: ${({ theme }) => theme.colors['base-text']};
    ${mixins.fonts.textS}
    padding: 1.2rem;

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }

    &:focus {
      border: 1px solid ${({ theme }) => theme.colors['yellow-dark']};
    }
  }

  ${({ $hasOpcional }) => {
    if ($hasOpcional === 'true') {
      return css`
        &::after {
          content: 'Opcional';
          position: absolute;
          color: ${({ theme }) => theme.colors['base-label']};
          right: 1.2rem;
          font-size: 1.2rem;
          font-weight: 400;
          font-style: italic;
          line-height: 130%;
        }
      `
    }
  }}
`
