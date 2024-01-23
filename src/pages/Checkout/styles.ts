import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const CheckoutContainer = styled.main`
  padding-top: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
`

export const CheckoutFormContent = styled.form`
  width: min(100%, 112rem);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 3.2rem;
`

export const TitleContainer = styled.h1`
  ${mixins.fonts.titleXS}
  color: ${({ theme }) => theme.colors['base-subtitle']};
  margin-bottom: 1.5rem;
`

export const BaseStyleContainer = styled.div`
  background: ${({ theme }) => theme.colors['base-card']};
  display: flex;
  flex-direction: column;
  padding: clamp(2rem, 1px + 5vw, 4rem);
  align-items: flex-start;
  align-self: stretch;
  border-radius: 6px;
`
