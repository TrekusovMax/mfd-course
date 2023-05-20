import { makeAutoObservable } from 'mobx'
import { initialProducts } from './initialProducts'
import { IProduct } from './types/IProduct'
import { round } from './utils'

export function calcCartTotal(cartProducts: IProduct[]) {
  const subtotal = cartProducts.reduce((acc, product) => {
    return acc + product.price * product.quantity
  }, 0)
  const tax = subtotal * 0.13
  const total = subtotal + tax

  return { subtotal: round(subtotal), tax: round(tax), total: round(total) }
}

type OrderStatus = 'success' | 'error' | 'pending' | undefined

export const OrderStore = makeAutoObservable({
  status: undefined as OrderStatus,
  reset() {
    this.status = undefined
  },
  *createOrder() {
    OrderStore.status = 'pending'
    const { success } = yield fetch(
      'https://mocki.io/v1/036a38a9-c0c9-4f61-a75e-b786df9be36f',
    ).then((res) => res.json())
    if (success) {
      OrderStore.status = 'success'
      ProductsStore.products.forEach((p) => (p.quantity = 0))
    } else {
      OrderStore.status = 'error'
    }
  },
})
export const ProductsStore = makeAutoObservable({
  products: initialProducts,
  headerClicks: 0,
  increaseHeaderClicks() {
    this.headerClicks++
  },
  increaseQuantity(id: IProduct['id']) {
    const product = this.products.find((p) => p.id === id)
    if (product) {
      product.quantity++
    }
  },
  decreaseQuantity(id: IProduct['id']) {
    const product = this.products.find((p) => p.id === id)
    if (product && product.quantity > 0) {
      product.quantity--
    }
  },
  get total() {
    console.log(this.headerClicks)
    return calcCartTotal(this.products)
  },
})
