import { observer } from 'mobx-react-lite'
import { Product } from '../Product/Product'
import { ProductsStore } from '../store'

export const Cart = observer(() => {
  return (
    <ul className="cart">
      {ProductsStore.products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </ul>
  )
})

