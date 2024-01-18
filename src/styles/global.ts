import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%;
  }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  list-style: none;
  text-decoration: none;
 }

 :focus {
  outline: 0;
  box-shadow: 0 0 0 0 transparent;
 }

 body {
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors['base-text']};
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
 }

`
