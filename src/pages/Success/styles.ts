import styled from 'styled-components'
import { mixins } from '../../styles/mixins'

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  padding: 0 2rem;
`

export const SuccessContent = styled.div`
  margin-top: 8rem;
  width: min(100%, 112rem);
  display: flex;
  justify-content: flex-start;

  flex-direction: column;
  gap: 4rem;

  header {
    h1 {
      ${mixins.fonts.titleL}
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }

    p {
      ${mixins.fonts.textL}
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }

  @media (max-width: 1025px) {
    header {
      margin: 0 auto;
    }
  }
`

export const SuccessInfoWrapper = styled.div`
  display: flex;
  width: 100%;
  gap: 5.8rem;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1025px) {
    & {
      flex-direction: column;
    }
  }
`
export const SuccessOrderInfoContent = styled.div`
  width: min(100%, 52.6rem);
  padding: 4rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3.2rem;
  background: white;
  position: relative;
  border-radius: 6px 36px;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 6px 36px;
    background: linear-gradient(
      102.89deg,
      rgb(219, 172, 44) 2.61%,
      rgb(128, 71, 248) 98.76%
    );
  }
`

export const SuccessOrderInfoHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(100%, 49.2rem);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
