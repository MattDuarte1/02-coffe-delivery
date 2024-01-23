import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Checkout } from '../pages/Checkout'
import { DefaultTemplate } from '../templates/Default'
import { Success } from '../pages/Success'

export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultTemplate />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/success" element={<Success />} />
      </Route>
    </Routes>
  )
}
