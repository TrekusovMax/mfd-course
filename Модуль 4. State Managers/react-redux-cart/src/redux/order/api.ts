import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const orderApiSlice = createApi({
  reducerPath: 'orderApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://mocki.io/v1' }),
  endpoints(builder) {
    return {
      createOrder: builder.mutation<{ success: true }, void>({
        query: () => ({ url: '/036a38a9-c0c9-4f61-a75e-b786df9be36f' }),
      }),
    }
  },
})
