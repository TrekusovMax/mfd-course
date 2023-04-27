import { selectors } from './constants.js'
import { round } from './utils.js'
import { addHandlers } from './handlers.js'

const cart = document.querySelector(selectors.cart)
const productTemplate = document
  .querySelector(selectors.productTemplate)
  .content.querySelector(selectors.product)
const cartSubtotal = document.querySelector(selectors.subtotal)
const cartTax = document.querySelector(selectors.salestax)
const cartTotal = document.querySelector(selectors.total)

export function renderProduct(product) {
<<<<<<< HEAD
    const existingCard = cart.querySelector(selectors.product + `[data-id='${product.id}']`)
    const productCard = existingCard || productTemplate.cloneNode(true);
=======
  const existingCard = cart.querySelector(
    selectors.product + `[data-id='${product.id}']`,
  )
>>>>>>> f2bbd520ce7e7e74741f5418bb09573347cc50c2

  const productCard = existingCard || productTemplate.cloneNode(true)

<<<<<<< HEAD
    if (!existingCard) {
        cart.appendChild(productCard);
    }
=======
  productCard.dataset.id = product.id
  populateProductCard(product, productCard)
  addHandlers(productCard)

  cart.appendChild(productCard)
>>>>>>> f2bbd520ce7e7e74741f5418bb09573347cc50c2
}

export function populateProductCard(product, cardElement) {
  cardElement.querySelector(selectors.productName).textContent = product.name
  cardElement.querySelector(selectors.productPreview).src = product.image
  cardElement.querySelector(selectors.productQuantity).textContent =
    'x' + product.quantity
  cardElement.querySelector(selectors.productPrice).textContent =
    '$ ' + product.price
}

export function renderCartTotal(total) {
  cartSubtotal.textContent = '$ ' + round(total.subtotal)
  cartTax.textContent = '$ ' + round(total.tax)
  cartTotal.textContent = '$ ' + round(total.total)
}

