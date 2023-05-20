<<<<<<< HEAD
import { products } from '../constants.js';
import { INCREASE_QUANTITY_ACTION, DECREASE_QUANTITY_ACTION } from './actions.js'

export function productsReducer(state = products, action) {
    switch (action.type) {
        case INCREASE_QUANTITY_ACTION:
            return state.map((product) => {
                if (product.id === action.payload.id) {
                    return {
                        ...product,
                        quantity: product.quantity + 1
                    }
                }

                return product;
            })

        case DECREASE_QUANTITY_ACTION:
            return state.map((product) => {
                if (product.id === action.payload.id && product.quantity > 0) {
                    return {
                        ...product,
                        quantity: product.quantity - 1
                    }
                }

                return product;
            })

        default:
            break;
    }

    return state;
}
=======
<<<<<<<< HEAD:Модуль 4. State Managers/react-redux-cart/src/redux/productsReducer.ts
import { initialProducts } from '../initialProducts'
import { INCREASE_QUANTITY_ACTION, DECREASE_QUANTITY_ACTION, ProjectActions } from './actions'

export function productsReducer(state = initialProducts, action: ProjectActions) {
========
import { products } from '../constants.js'
import {
  INCREASE_QUANTITY_ACTION,
  DECREASE_QUANTITY_ACTION,
} from './actions.js'

export function productsReducer(state = products, action) {
>>>>>>>> f2bbd520ce7e7e74741f5418bb09573347cc50c2:Модуль 4. State Managers/own-redux/scripts/redux/productsReducer.js
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
        if (product.id === action.payload.id && product.quantity > 0) {
          return {
            ...product,
            quantity: product.quantity - 1,
          }
        }

        return product
      })

    default:
      break
  }

  return state
}

>>>>>>> f2bbd520ce7e7e74741f5418bb09573347cc50c2
