import { RESET_ORDER_ACTION } from '../redux/actions'
import { useAppDispatch, useAppSelector } from '../redux/hooks'

export const OrderModal = () => {
  const dispatch = useAppDispatch()
  const show = useAppSelector((state) => state.order.confirmed)
  if (!show) {
    return null
  }
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order confirmed</h2>
        <div className="main-button" onClick={() => dispatch({ type: RESET_ORDER_ACTION })}>
          Perfect!
        </div>
      </div>
    </div>
  )
}

