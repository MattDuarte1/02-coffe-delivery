import styled from 'styled-components'
import { mixins } from '../../../../../../styles/mixins'

export const CardTagContainer = styled.li`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 100px;

  background-color: ${({ theme }) => theme.colors['yellow-light']};

  ${mixins.fonts.tag}
  color: ${({ theme }) => theme.colors['yellow-dark']};
  text-transform: uppercase;
`
