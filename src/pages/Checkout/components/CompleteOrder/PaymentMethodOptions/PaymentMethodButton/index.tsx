import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'
import { PaymentMethodContainer, ContentContainer } from './styles'
import { forwardRef, InputHTMLAttributes, ReactNode } from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode
  label: string
  hasError?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined
}

// eslint-disable-next-line react/display-name
export const PaymentMethodButton = forwardRef<
  HTMLInputElement,
  PaymentMethodInputProps
>(({ id, icon, label, hasError, ...props }, ref) => {
  const errorExists = !!hasError
  return (
    <PaymentMethodContainer>
      <input id={id} type="radio" {...props} name="paymentMethod" ref={ref} />
      <label htmlFor={id}>
        <ContentContainer $haserror={String(errorExists)}>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodContainer>
  )
})
