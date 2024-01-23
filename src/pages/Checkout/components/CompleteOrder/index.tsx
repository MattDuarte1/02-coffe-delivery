import { CompleteOrderContainer } from './styles'
import { DeliveryAddress } from './DeliveryAddress'
import { TitleContainer } from '../../styles'

import { DeliveryPaymentMethodOptions } from './PaymentMethodOptions'

export const CompleteOrderComponent = () => {
  return (
    <CompleteOrderContainer>
      <TitleContainer>Complete seu pedido</TitleContainer>
      <DeliveryAddress />
      <DeliveryPaymentMethodOptions />
    </CompleteOrderContainer>
  )
}
