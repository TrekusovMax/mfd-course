import { selectors } from './constants.js'
<<<<<<< HEAD
import { store } from './redux/store.js';
import { decreaseQuantityActionCreator, increaseQuantityActionCreator } from './redux/actions.js';
=======

import { store } from './redux/store.js'
import {
  decreaseQuantityActionCreator,
  increaseQuantityActionCreator,
} from './redux/actions.js'
>>>>>>> f2bbd520ce7e7e74741f5418bb09573347cc50c2

export function addHandlers(card) {
    card.querySelector(selectors.increaseQuantityButton).addEventListener('click', handleIncreaseQuantity)
    card.querySelector(selectors.decreaseQuantityButton).addEventListener('click', handleDecreaseQuantity)
}

function handleIncreaseQuantity(e) {
<<<<<<< HEAD
    const card = e.target.closest(selectors.product);
    const id = Number(card.dataset.id);
    store.dispatch(increaseQuantityActionCreator(id))
}

function handleDecreaseQuantity(e) {
    const card = e.target.closest(selectors.product);
    const id = Number(card.dataset.id);
    store.dispatch(decreaseQuantityActionCreator(id))
=======
  const card = e.target.closest(selectors.product)
  const id = Number(card.dataset.id)
  store.dispatch(increaseQuantityActionCreator(id))
}

function handleDecreaseQuantity(e) {
  const card = e.target.closest(selectors.product)
  const id = Number(card.dataset.id)
  store.dispatch(decreaseQuantityActionCreator(id))
>>>>>>> f2bbd520ce7e7e74741f5418bb09573347cc50c2
}
