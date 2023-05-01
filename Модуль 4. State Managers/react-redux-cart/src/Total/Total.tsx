import { round } from '../utils'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

import { createOrder } from '../redux/orderReducer'

export function Total() {
  const total = useAppSelector((state) => {
    const subtotal = state.products.reduce((acc, product) => {
      return acc + product.price * product.quantity
    }, 0)
    const tax = subtotal * 0.13
    const total = subtotal + tax
    return {
      total: round(total),
      subtotal: round(subtotal),
      tax: round(tax),
    }
  })

  const dispatch = useAppDispatch()
  const disableBuyButton = useAppSelector((state) => state.order.loading)
  return (
    <table className="bill">
      <tbody>
        <tr className="subtotal">
          <td className="label">Subtotal :</td>
          <td className="value">$ {total.subtotal}</td>
        </tr>
        <tr className="salestax">
          <td className="label">Sales tax :</td>
          <td className="value">$ {total.tax}</td>
        </tr>
        <tr className="total">
          <td className="label">Total :</td>
          <td className="value">$ {total.total}</td>
        </tr>
        <tr>
          <td colSpan={2} className="button-cell">
            <button
              className="main-button"
              disabled={disableBuyButton}
              onClick={() => dispatch(createOrder())}
            >
              Buy
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
