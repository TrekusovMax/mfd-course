import { useAppDispatch, useAppSelector } from '../redux/hooks'
import { resetOrder } from '../redux/orderReducer'

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
        <div className="main-button" onClick={() => dispatch(resetOrder())}>
          Perfect!
        </div>
      </div>
    </div>
  )
}
