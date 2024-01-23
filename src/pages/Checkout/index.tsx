import { CheckoutContainer, CheckoutFormContent } from './styles'
import { CompleteOrderComponent } from './components/CompleteOrder'
import { SelectedCoffees } from './components/SelectedCoffees'

export const Checkout = () => {
  const handleFormSubmit = () => {}

  return (
    <CheckoutContainer>
      <CheckoutFormContent action="" onSubmit={handleFormSubmit}>
        <CompleteOrderComponent />
        <SelectedCoffees />
      </CheckoutFormContent>
    </CheckoutContainer>
  )
}
