import { CreditCard, CurrencyDollar, Money, Bank } from '@phosphor-icons/react'
import {
  DeliveryPaymentContainer,
  DeliveryPaymentMethodButtonList,
} from './styles'
import { PaymentMethodButton } from './PaymentMethodButton'
import { SectionTitle } from '../SectionTitle'
import { useFormContext } from 'react-hook-form'

export const DeliveryPaymentMethodOptions = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext()
  const typesPaymentsMethods = {
    money: {
      label: 'Dinheiro',
      icon: <Money size={16} />,
    },
    debit: {
      label: 'Cartão de debito',
      icon: <Bank size={16} />,
    },
    credit: {
      label: 'Cartão de credito',
      icon: <CreditCard size={16} />,
    },
  }

  return (
    <DeliveryPaymentContainer>
      <SectionTitle
        title="Pagamento"
        subtitle="Escolha a opção de pagamento"
        icon={<CurrencyDollar size={22} />}
      />

      <DeliveryPaymentMethodButtonList>
        {Object.entries(typesPaymentsMethods).map(([key, { label, icon }]) => (
          <PaymentMethodButton
            key={key}
            id={key}
            icon={icon}
            label={label}
            value={key}
            hasError={errors.paymentMethod?.message}
            {...register('paymentMethod')}
          />
        ))}
      </DeliveryPaymentMethodButtonList>
    </DeliveryPaymentContainer>
  )
}
