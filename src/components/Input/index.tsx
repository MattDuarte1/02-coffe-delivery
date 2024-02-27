import { forwardRef } from 'react'
import { InputContainer } from './styles'
import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

interface InputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  hasOpcional?: boolean
  hasError?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
}
export const InputComponent = forwardRef<HTMLInputElement, InputComponentProps>(
  ({ hasOpcional = false, hasError, ...rest }, ref) => {
    const hasErrorExistes = !!hasError
    const hasOpcionalFormattedToString = String(hasOpcional)
    return (
      <InputContainer
        $haserror={String(hasErrorExistes)}
        $hasopcional={hasOpcionalFormattedToString}
      >
        <input ref={ref} {...rest} />
      </InputContainer>
    )
  },
)

InputComponent.displayName = 'Input Component'
