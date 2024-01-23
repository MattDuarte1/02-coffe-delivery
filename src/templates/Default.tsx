import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const DefaultTemplate = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
