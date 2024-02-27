import { MapPinLine } from '@phosphor-icons/react'
import { InputComponent } from '../../../../../components/Input'
import { DeliveryAddressContainer, DeliveryAddressForm } from './styles'
import { SectionTitle } from '../SectionTitle'
import { useFormContext } from 'react-hook-form'

export const DeliveryAddress = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  return (
    <DeliveryAddressContainer>
      <SectionTitle
        title="Endereço de entrega"
        subtitle="Informe o endereço onde deseja receber seu pedido"
        icon={<MapPinLine size={22} />}
      />
      <DeliveryAddressForm>
        <InputComponent
          type="text"
          placeholder="CEP"
          hasError={errors.cep?.message}
          {...register('cep')}
        />
        <InputComponent
          type="text"
          placeholder="Rua"
          hasError={errors.street?.message}
          {...register('street')}
        />
        <div>
          <InputComponent
            type="text"
            placeholder="Número"
            hasError={errors.number?.message}
            {...register('number')}
          />
          <InputComponent
            type="text"
            placeholder="Complemento"
            hasOpcional={true}
            {...register('complement')}
          />
        </div>
        <div>
          <InputComponent
            type="text"
            placeholder="Bairro"
            hasError={errors.district?.message}
            {...register('district')}
          />
          <InputComponent
            type="text"
            placeholder="Cidade"
            hasError={errors.city?.message}
            {...register('city')}
          />
          <InputComponent
            type="text"
            placeholder="UF"
            hasError={errors.state?.message}
            {...register('state')}
          />
        </div>
      </DeliveryAddressForm>
    </DeliveryAddressContainer>
  )
}
