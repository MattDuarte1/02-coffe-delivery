import { CheckoutContainer, CheckoutFormContent } from './styles'
import { CompleteOrderComponent } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'
import { FormProvider, useForm } from 'react-hook-form'
import zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Bounce, toast } from 'react-toastify'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const confirmCheckoutFormValidationSchema = zod.object({
  cep: zod.string().min(1),
  street: zod.string().min(1),
  number: zod.string().min(1),
  complement: zod.string(),
  district: zod.string().min(1),
  city: zod.string().min(1),
  state: zod.string().min(1),
  paymentMethod: zod.nativeEnum(PaymentMethods),
})

export type OrderData = zod.infer<typeof confirmCheckoutFormValidationSchema>

type ConfirmOrderFormData = OrderData

export const Checkout = () => {
  const { cartItemsState } = useCart()
  const confirmCheckoutForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(confirmCheckoutFormValidationSchema),
    defaultValues: {
      paymentMethod: undefined,
    },
  })

  const navigate = useNavigate()

  const { handleSubmit } = confirmCheckoutForm

  const handleFormSubmit = (data: ConfirmOrderFormData) => {
    if (cartItemsState.length >= 1) {
      toast('Pedido está sendo Processado Aguarde!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
        type: 'success',
      })

      setTimeout(() => {
        navigate('/success', { state: data })
      }, 5000)

      console.log(data)
    } else {
      toast('Selecione algum café!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
        transition: Bounce,
        type: 'info',
      })
    }
  }

  return (
    <FormProvider {...confirmCheckoutForm}>
      <CheckoutContainer>
        <CheckoutFormContent onSubmit={handleSubmit(handleFormSubmit)}>
          <CompleteOrderComponent />
          <SelectedCoffees />
        </CheckoutFormContent>
      </CheckoutContainer>
    </FormProvider>
  )
}
