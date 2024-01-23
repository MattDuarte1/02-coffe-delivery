import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { DefaultTemplate } from '../templates/Default'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
