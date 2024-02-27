import {
  SuccessContainer,
  SuccessContent,
  SuccessInfoWrapper,
  SuccessOrderInfoContent,
  SuccessOrderInfoHero,
} from './styles'
import ilustrationIMG from '../../assets/illustration.svg'
import { MapPin } from '@phosphor-icons/react'
import { SuccessOrderInfoRow } from './components/SuccessOrderInfoRow'
import { useLocation } from 'react-router-dom'

interface stateProps {
  number: string
  city: string
  state: string
  street: string
  paymentMethod: 'money' | 'debit' | 'credit'
  district: string
}

export const Success = () => {
  const { state }: { state: stateProps } = useLocation()

  const paymentMethodFormat = {
    money: 'Dinheiro',
    debit: 'Cartão de débito',
    credit: 'Cartão de crédito',
  }

  return (
    <SuccessContainer>
      <SuccessContent>
        <header>
          {state && state.paymentMethod ? (
            <>
              <h1>uhu! pedido confirmado</h1>
              <p>Agora é só aguardar que logo o café chegará até você</p>
            </>
          ) : (
            <>
              <h1>Você ainda nao concluiu um pedido</h1>
            </>
          )}
        </header>
        <SuccessInfoWrapper>
          {state && state.city && state.paymentMethod && state.street && (
            <SuccessOrderInfoContent>
              <SuccessOrderInfoRow
                icon={<MapPin size={16} weight="fill" />}
                iconBgColor="purple"
                text={
                  <p>
                    Entrega em{' '}
                    <strong>
                      {' '}
                      {state.street}, {state.number}
                    </strong>
                    <br />
                    {state.district} - {state.city} - {state.state}
                  </p>
                }
              />

              <SuccessOrderInfoRow
                icon={<MapPin size={16} weight="fill" />}
                iconBgColor="yellow"
                text={
                  <p>
                    Previsão de entrega
                    <br />
                    <strong>20 min - 30 min</strong>
                  </p>
                }
              />

              <SuccessOrderInfoRow
                icon={<MapPin size={16} weight="fill" />}
                iconBgColor="yellow-dark"
                text={
                  <p>
                    Pagamento na entrega
                    <br />
                    <strong>{paymentMethodFormat[state.paymentMethod]}</strong>
                  </p>
                }
              />
            </SuccessOrderInfoContent>
          )}
          <SuccessOrderInfoHero>
            <img src={ilustrationIMG} alt="ilustration img" />
          </SuccessOrderInfoHero>
        </SuccessInfoWrapper>
      </SuccessContent>
    </SuccessContainer>
  )
}
