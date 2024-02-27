import { CartItem } from '../../contexts/CartContext'
import { Operation } from '../../interfaces/operation'

export enum ActionsTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  CHANGE_COFFEE_QUANTITY = 'CHANGE_COFFEE_QUANTITY',
  SHOW_TOTAL_COFFEE_IN_CART = 'SHOW_TOTAL_COFFEE_IN_CART',
  REMOVE_COFFE_IN_CART = 'REMOVE_COFFE_IN_CART',
}

export function addCoffeToCartAction(coffee: CartItem) {
  return {
    type: ActionsTypes.ADD_COFFEE_TO_CART,
    payload: {
      coffee,
    },
  }
}

export function changeCoffeeQuantityAction(
  coffeeId: string,
  operation: Operation,
) {
  return {
    type: ActionsTypes.CHANGE_COFFEE_QUANTITY,
    payload: {
      coffeeId,
      operation,
    },
  }
}

export function showTotalCoffeeInCartAction() {
  return {
    type: ActionsTypes.SHOW_TOTAL_COFFEE_IN_CART,
  }
}

export function removeCoffeInCartAction(coffeeId: string) {
  return {
    type: ActionsTypes.REMOVE_COFFE_IN_CART,
    payload: {
      coffeeId,
    },
  }
}
