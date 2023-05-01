import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  confirmed: false,
}

export const createOrder = createAsyncThunk('createOrder', async () => {
  const res = await fetch(
    'https://mocki.io/v1/036a38a9-c0c9-4f61-a75e-b786df9be36f',
  )
  const data: { success: boolean } = await res.json()

  if (!data.success) {
    throw new Error('Something goes wrong')
  }
})

export const orderSlice = createSlice({
  initialState,
  name: 'order',
  reducers: {
    resetOrder() {
      return initialState
    },
  },
  extraReducers(builder) {
    builder.addMatcher(createOrder.pending.match, () => {
      return {
        loading: true,
        confirmed: false,
      }
    })
    builder.addMatcher(createOrder.fulfilled.match, () => {
      return {
        loading: false,
        confirmed: true,
      }
    })
    builder.addMatcher(createOrder.rejected.match, () => {
      return {
        loading: false,
        confirmed: false,
      }
    })
  },
})

export const { resetOrder } = orderSlice.actions
