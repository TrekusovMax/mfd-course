import { OrderStore } from '../store'
import { observer } from 'mobx-react-lite'

export const OrderModal = observer(() => {
  let status = OrderStore.status

  if (status !== 'success') {
    return null
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Order confirmed</h2>
        <div className="main-button" onClick={() => OrderStore.reset()}>
          Perfect!
        </div>
      </div>
    </div>
  )
})
