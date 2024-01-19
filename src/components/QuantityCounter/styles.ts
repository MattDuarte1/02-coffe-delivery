import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const QuantityCounterContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors['base-button']};
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-radius: 6px;
  gap: 0.4rem;
  padding: 0.8rem;

  span {
    ${mixins.fonts.textM}
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: 600;
    padding: 0 0.2rem;
  }

  button {
    flex: 2;
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.purple};
    cursor: pointer;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }
`
