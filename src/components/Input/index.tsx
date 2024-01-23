import { InputContainer } from './styles'

interface InputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasOpcional?: boolean
}
export const InputComponent = ({
  hasOpcional = false,
  ...rest
}: InputComponentProps) => {
  const hasOpcionalFormattedToString = String(hasOpcional)
  return (
    <InputContainer $hasOpcional={hasOpcionalFormattedToString}>
      <input {...rest} />
    </InputContainer>
  )
}
