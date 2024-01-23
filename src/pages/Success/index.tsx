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

export const Success = () => {
  return (
    <SuccessContainer>
      <SuccessContent>
        <header>
          <h1>uhu! pedido confirmado</h1>
          <p>Agora é só aguardar que logo o café chegará até você</p>
        </header>

        <SuccessInfoWrapper>
          <SuccessOrderInfoContent>
            <SuccessOrderInfoRow
              icon={<MapPin size={16} weight="fill" />}
              iconBgColor="purple"
              text={
                <p>
                  entrega em Rua João Daniel, 102
                  <br />
                  <strong>Rio de janeiro - RJ</strong>
                </p>
              }
            />

            <SuccessOrderInfoRow
              icon={<MapPin size={16} weight="fill" />}
              iconBgColor="yellow"
              text={
                <p>
                  entrega em Rua João Daniel, 102
                  <br />
                  <strong>Rio de janeiro - RJ</strong>
                </p>
              }
            />

            <SuccessOrderInfoRow
              icon={<MapPin size={16} weight="fill" />}
              iconBgColor="yellow-dark"
              text={
                <p>
                  entrega em Rua João Daniel, 102
                  <br />
                  <strong>Rio de janeiro - RJ</strong>
                </p>
              }
            />
          </SuccessOrderInfoContent>
          <SuccessOrderInfoHero>
            <img src={ilustrationIMG} alt="ilustration img" />
          </SuccessOrderInfoHero>
        </SuccessInfoWrapper>
      </SuccessContent>
    </SuccessContainer>
  )
}
