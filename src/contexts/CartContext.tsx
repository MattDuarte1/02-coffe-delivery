import { createContext, useReducer } from 'react'
import { ICoffee } from '../interfaces/coffee'
import { cartItemsReducer } from '../reducers/cartItems/reducer'
import {
  addCoffeToCartAction,
  changeCoffeeQuantityAction,
  removeCoffeInCartAction,
} from '../reducers/cartItems/actions'
import { Operation } from '../interfaces/operation'
import { formatMoney } from '../utils/formatMoney'

export interface CartItem extends ICoffee {
  quantity: number
}

interface ICartContext {
  cartItemsState: CartItem[]
  createNewCoffeToCart: (coffee: CartItem) => void
  showQuantityTotalInCart: () => string
  markQuantityCoffee: (coffeId: string, operation: Operation) => void
  removeCoffeInCart: (coffeId: string) => void
}

export const CartContext = createContext({} as ICartContext)

interface CartContextProviderProps {
  children: React.ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cartItemsState, dispatch] = useReducer(cartItemsReducer, [])

  function createNewCoffeToCart(coffee: CartItem) {
    dispatch(addCoffeToCartAction(coffee))
  }

  function showQuantityTotalInCart() {
    const qtdTotalInCart = cartItemsState.reduce((total, cartItem) => {
      return total + cartItem.price * cartItem.quantity
    }, 0)

    return formatMoney(qtdTotalInCart)
  }

  function markQuantityCoffee(coffeeId: string, operation: Operation) {
    dispatch(changeCoffeeQuantityAction(coffeeId, operation))
  }

  function removeCoffeInCart(coffeeId: string) {
    dispatch(removeCoffeInCartAction(coffeeId))
  }

  return (
    <CartContext.Provider
      value={{
        cartItemsState,
        createNewCoffeToCart,
        showQuantityTotalInCart,
        markQuantityCoffee,
        removeCoffeInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
