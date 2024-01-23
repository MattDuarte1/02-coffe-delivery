import styled from 'styled-components'
import { mixins } from '../../../../../styles/mixins'

export const SectionTitleContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.8rem;
  margin-bottom: 3.2rem;

  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  > div p {
    ${mixins.fonts.textM};
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  > div span {
    ${mixins.fonts.textS};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`
