import { CoffeOrderConfirmContainer, CoffeOrderRowInfo } from './styles'

interface CoffeOrderConfirmProps {
  totalItemsPrice: string
}
export const CoffeOrderConfirm = ({
  totalItemsPrice,
}: CoffeOrderConfirmProps) => {
  return (
    <CoffeOrderConfirmContainer>
      <CoffeOrderRowInfo>
        <span>Total de itens</span>
        <span>R$ {totalItemsPrice}</span>
      </CoffeOrderRowInfo>
      <CoffeOrderRowInfo>
        <span>Entrega</span>
        <span>R$ 29,70</span>
      </CoffeOrderRowInfo>
      <CoffeOrderRowInfo>
        <strong>Total</strong>
        <strong>R$ {totalItemsPrice}</strong>
      </CoffeOrderRowInfo>
      <button type="submit">Confirmar Pedido</button>
    </CoffeOrderConfirmContainer>
  )
}
