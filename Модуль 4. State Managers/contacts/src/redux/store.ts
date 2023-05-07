import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contact'

const rootReducer = combineReducers({
  contacts: contactsReducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat()
  },
})

export type RootState = ReturnType<typeof rootReducer>
