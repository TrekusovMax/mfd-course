import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../types/IProduct'
import { orderApiSlice } from './orderReducer'

const initialState: Record<IProduct['id'], number> = {}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increaseQuantity(state, action: PayloadAction<IProduct['id']>) {
      if (state[action.payload]) {
        state[action.payload] += 1
      } else {
        state[action.payload] = 1
      }
    },
    decreaseQuantity(state, action: PayloadAction<IProduct['id']>) {
      if (state[action.payload] > 0) {
        state[action.payload] -= 1
      } else {
        state[action.payload] = 0
      }
    },
  },
  extraReducers(builder) {
    builder.addMatcher(orderApiSlice.endpoints.createOrder.matchFulfilled, () => initialState)
  },
})

export const productApiSlice = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      getProducts: builder.query<IProduct[], void>({
        query: () => ({ url: '/7fa5e00b-05ae-4e00-aebb-e6df8d894611' }),
      }),
    }
  },
})

export const { decreaseQuantity, increaseQuantity } = productSlice.actions

export const { useGetProductsQuery } = productApiSlice
