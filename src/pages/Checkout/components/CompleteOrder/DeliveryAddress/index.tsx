import { MapPinLine } from '@phosphor-icons/react'
import { InputComponent } from '../../../../../components/Input'
import { DeliveryAddressContainer, DeliveryAddressForm } from './styles'
import { SectionTitle } from '../SectionTitle'

export const DeliveryAddress = () => {
  return (
    <DeliveryAddressContainer>
      <SectionTitle
        title="Endereço de entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={<MapPinLine size={22} />}
      />
      <DeliveryAddressForm>
        <InputComponent type="text" name="cep" placeholder="CEP" />
        <InputComponent type="text" name="street" placeholder="Rua" />
        <div>
          <InputComponent type="number" name="number" placeholder="Número" />
          <InputComponent
            type="text"
            name="complement"
            placeholder="Complemento"
            hasOpcional={true}
          />
        </div>
        <div>
          <InputComponent type="text" name="district" placeholder="Bairro" />
          <InputComponent type="text" name="city" placeholder="Cidade" />
          <InputComponent type="text" name="state" placeholder="UF" />
        </div>
      </DeliveryAddressForm>
    </DeliveryAddressContainer>
  )
}
