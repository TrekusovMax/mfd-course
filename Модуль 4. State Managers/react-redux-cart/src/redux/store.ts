import { combineReducers } from 'redux'
import { productApiSlice, productSlice } from './productsReducer'
import { logActionMiddleware } from './logActionMiddleware'
import { orderApiSlice } from './orderReducer'

import {
  persistReducer,
  persistStore,
  FLUSH,
  REGISTER,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configureStore } from '@reduxjs/toolkit'

const rootReducer = persistReducer(
  {
    key: 'redux',
    storage: storage,
  },
  combineReducers({
    products: productSlice.reducer,
    [orderApiSlice.reducerPath]: orderApiSlice.reducer,
    [productApiSlice.reducerPath]: productApiSlice.reducer,
  }),
)

export const store = configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REGISTER, REHYDRATE, PAUSE, PERSIST, PURGE],
      },
    }).concat([productApiSlice.middleware, orderApiSlice.middleware, logActionMiddleware])
  },
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof rootReducer>
