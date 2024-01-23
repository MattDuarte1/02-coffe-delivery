import {
  SuccessOrderInfoRowContainer,
  SuccessOrderInfoIcon,
  SuccessOrderInfoDescription,
} from './styles'
import { ReactNode } from 'react'

interface SuccessOrderInfoRowProps {
  icon: ReactNode
  text: ReactNode
  iconBgColor: 'purple' | 'yellow' | 'yellow-dark'
}
export const SuccessOrderInfoRow = ({
  icon,
  text,
  iconBgColor = 'purple',
}: SuccessOrderInfoRowProps) => {
  return (
    <SuccessOrderInfoRowContainer>
      <SuccessOrderInfoIcon $iconBgColor={iconBgColor}>
        {icon}
      </SuccessOrderInfoIcon>
      <SuccessOrderInfoDescription>{text}</SuccessOrderInfoDescription>
    </SuccessOrderInfoRowContainer>
  )
}
