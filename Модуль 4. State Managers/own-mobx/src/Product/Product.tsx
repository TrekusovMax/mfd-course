import { ProductsStore } from '../store'
import { IProduct } from '../types/IProduct'
import { observer } from 'mobx-react-lite'

interface IProductProps {
  product: IProduct
}

export const Product = observer(({ product }: IProductProps) => {
  return (
    <li className="product">
      <div className="product-preview">
        <div className="thumbnail">
          <img className="image" src={product.image} alt={product.name} />
        </div>
        <div className="product-paper">
          <div className="product-name">{product.name}</div>
          <div className="product-price">$ {product.price}</div>
        </div>
      </div>
      <div className="product-quantity">x{product.quantity}</div>
      <div className="product-interactions">
        <div className="button plus" onClick={() => ProductsStore.increaseQuantity(product.id)}>
          +
        </div>
        <div className="button minus" onClick={() => ProductsStore.decreaseQuantity(product.id)}>
          -
        </div>
      </div>
    </li>
  )
})

