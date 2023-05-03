import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IProduct } from '../../types/IProduct'

export const productsApiSlice = createApi({
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

export const { useGetProductsQuery } = productsApiSlice
