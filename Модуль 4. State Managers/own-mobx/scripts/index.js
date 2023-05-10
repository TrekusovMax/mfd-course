import { renderProduct, renderCartTotal } from './renderer.js'
<<<<<<< HEAD
import { calcCartTotal } from './calc.js';
import { store } from './redux/store.js';

store.subscribe(() => {
    console.log('update products')
    store.getState().products.forEach(renderProduct)
})

store.subscribe(() => {
    console.log('update total')
    renderCartTotal(
        calcCartTotal(store.getState().products)
    )
})

store.dispatch({ type: 'INIT' })

=======
import { calcCartTotal } from './calc.js'
import { store } from './redux/store.js'
>>>>>>> f2bbd520ce7e7e74741f5418bb09573347cc50c2

store.subscribe(() => {
  console.log('update products')
  store.getState().products.forEach(renderProduct)
})
store.subscribe(() => {
  console.log('update total')
  renderCartTotal(calcCartTotal(store.getState().products))
})

store.dispatch({ type: 'INIT' })

