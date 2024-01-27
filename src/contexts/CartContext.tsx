import { createContext, useState } from 'react'
import { ICoffee } from '../interfaces/coffee'
import { produce } from 'immer'

export interface CartItem extends ICoffee {
  quantity: number
}
interface ICartContext {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  cartItemsTotalQuantity: number
}

export const CartContext = createContext({} as ICartContext)

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItems, setCartItems] = useState([] as CartItem[])

  const addCoffeeToCart = (coffee: CartItem) => {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id,
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  const cartItemsTotalQuantity = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0)

  return (
    <CartContext.Provider
      value={{ cartItems, addCoffeeToCart, cartItemsTotalQuantity }}
    >
      {children}
    </CartContext.Provider>
  )
}
