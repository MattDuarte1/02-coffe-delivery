import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const InfoContainer = styled.div`
  color: ${({ theme }) => theme.colors['base-text']};
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.2rem;

  > p {
    ${mixins.fonts.textM}
  }
`

const IconBgColors = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  'base-text': 'base-text',
  purple: 'purple',
}

interface IconContainerProps {
  $iconBgColor: keyof typeof IconBgColors
}

export const IconContainer = styled.span<IconContainerProps>`
  padding: 0.8rem;
  border-radius: 1000px;
  background: ${({ theme, $iconBgColor }) => theme.colors[$iconBgColor]};
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.6rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
