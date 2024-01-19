import styled from 'styled-components'
import { mixins } from '../../../../styles/mixins'

export const OurCoffesContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 2rem;
`

export const OurCoffesContent = styled.section`
  width: min(100%, 112rem);

  h2 {
    margin-bottom: 5.4rem;
    color: ${({ theme }) => theme.colors['base-subtitle']};
    ${mixins.fonts.titleL}
  }

  > ul {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25.6rem, 1fr));
    gap: 3.2rem;
  }
`
