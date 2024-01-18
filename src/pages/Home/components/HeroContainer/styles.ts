import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const HeroContainer = styled.div`
  width: 100%;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  background:
    url('public/Background.png') center center / cover no-repeat,
    linear-gradient(
      0deg,
      rgb(255, 255, 255) 0%,
      rgba(250, 250, 250, 0.2) 50%,
      rgb(250, 250, 250) 100%
    );
`

export const HeroContent = styled.section`
  width: min(100%, 112rem);
  padding: 9.2rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5.6rem;
`

export const HeroDescription = styled.div`
  max-width: 588px;
  display: flex;
  flex-direction: column;

  > h1 {
    color: ${({ theme }) => theme.colors['base-title']};
    ${mixins.fonts.titleXL}
  }

  > p {
    margin-top: 1.6rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    ${mixins.fonts.textL}
  }

  footer {
    margin-top: 6.6rem;
    margin-right: 2.1rem;

    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;

    @media (max-width: 435px) {
      grid-template-columns: 1fr;
    }
  }
`

export const HeroImage = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: clamp(28rem, 35rem + 1vw, 48rem);
  max-width: 48rem;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`
