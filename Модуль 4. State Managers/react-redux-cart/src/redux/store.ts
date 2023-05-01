import { combineReducers } from 'redux'
import { productSlice } from './productsReducer'
import { logActionMiddleware } from './logActionMiddleware'
import { orderSlice } from './orderReducer'
import thunkMiddleware from 'redux-thunk'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configureStore } from '@reduxjs/toolkit'

const rootReducer = persistReducer(
  {
    key: 'redux',
    storage: storage,
  },
  combineReducers({
    products: productSlice.reducer,
    order: orderSlice.reducer,
  }),
)

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: [thunkMiddleware, logActionMiddleware],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
