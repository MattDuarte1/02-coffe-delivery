import { produce } from 'immer'
import { CartItem } from '../../contexts/CartContext'
import { ActionsTypes } from './actions'

export const cartItemsReducer = (state: CartItem[], action: any) => {
  switch (action.type) {
    case ActionsTypes.ADD_COFFEE_TO_CART: {
      const coffeAlreadyExistsIncart = state.findIndex(
        (cartItem) => cartItem.id === action.payload.coffee.id,
      )

      const newCart = produce(state, (draft) => {
        if (coffeAlreadyExistsIncart < 0) {
          draft.push(action.payload.coffee)
        } else {
          draft[coffeAlreadyExistsIncart].quantity +=
            action.payload.coffee.quantity
        }
      })
      return newCart
    }

    case ActionsTypes.CHANGE_COFFEE_QUANTITY: {
      const newCart = produce(state, (draft) => {
        const coffeeExistsInCart = state.findIndex(
          (cartItem) => cartItem.id === action.payload.coffeeId,
        )

        if (coffeeExistsInCart >= 0) {
          const item = draft[coffeeExistsInCart]
          item.quantity =
            action.payload.operation === 'increase'
              ? item.quantity + 1
              : (Math.max(item.quantity - 1, 1) as number)
        }
      })

      return newCart
    }

    case ActionsTypes.REMOVE_COFFE_IN_CART: {
      const coffeAlreadyExistsIncart = state.findIndex(
        (cartItem) => cartItem.id === action.payload.coffeeId,
      )

      const newCoffeesInCart = produce(state, (draft) => {
        if (coffeAlreadyExistsIncart >= 0) {
          draft.splice(coffeAlreadyExistsIncart, 1)
        }
      })

      return newCoffeesInCart
    }

    default:
      return state
  }
}
