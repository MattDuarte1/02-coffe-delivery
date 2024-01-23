import { CoffeOrderConfirmContainer, CoffeOrderRowInfo } from './styles'

export const CoffeOrderConfirm = () => {
  return (
    <CoffeOrderConfirmContainer>
      <CoffeOrderRowInfo>
        <span>Total de itens</span>
        <span>R$ 29,70</span>
      </CoffeOrderRowInfo>
      <CoffeOrderRowInfo>
        <span>Entrega</span>
        <span>R$ 29,70</span>
      </CoffeOrderRowInfo>
      <CoffeOrderRowInfo>
        <strong>Total</strong>
        <strong>R$ 33,20</strong>
      </CoffeOrderRowInfo>
      <button type="submit">Confirmar Pedido</button>
    </CoffeOrderConfirmContainer>
  )
}
