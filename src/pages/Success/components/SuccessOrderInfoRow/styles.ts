import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const SuccessOrderInfoRowContainer = styled.div`
  display: flex;
  gap: 1.2rem;
`

const IconBgColors = {
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
  purple: 'purple',
}

interface SuccessOrderInfoIcon {
  $iconBgColor: keyof typeof IconBgColors
}

export const SuccessOrderInfoIcon = styled.div<SuccessOrderInfoIcon>`
  display: flex;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 999px;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme, $iconBgColor }) => theme.colors[$iconBgColor]};
  padding: 0.8rem;
`

export const SuccessOrderInfoDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mixins.fonts.textM}
  color: ${({ theme }) => theme.colors['base-text']};
`
