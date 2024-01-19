import { CardTagContainer } from './styles'

interface CoffeeCardTagProps {
  text: string
}

export const CoffeeCardTag = ({ text }: CoffeeCardTagProps) => {
  return <CardTagContainer>{text}</CardTagContainer>
}
