import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { RoutesApp } from './routes'
import { CartContextProvider } from './contexts/CartContext'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <RoutesApp />
        </BrowserRouter>
      </CartContextProvider>
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
