import {
  DECREASE_QUANTITY_ACTION,
  INCREASE_QUANTITY_ACTION,
} from './actions.js'

export function productReducer(state = products, action) {
  switch (action.type) {
    case INCREASE_QUANTITY_ACTION:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity + 1,
          }
        }
        return product
      })
    case DECREASE_QUANTITY_ACTION:
      return state.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }
        return product
      })
  }
}
