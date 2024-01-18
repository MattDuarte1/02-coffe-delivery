import { InfoContainer, IconContainer } from './styles'

type IconBgColors = 'purple' | 'yellow' | 'base-text' | 'yellow-dark'

interface InfoItemWithIconProps {
  icon: React.ReactNode
  iconBgColor: IconBgColors
  text: string
}

export const InfoItemWithIcon = ({
  icon,
  text,
  iconBgColor,
}: InfoItemWithIconProps) => {
  return (
    <InfoContainer>
      <IconContainer $iconBgColor={iconBgColor}>{icon}</IconContainer>
      <p>{text}</p>
    </InfoContainer>
  )
}
