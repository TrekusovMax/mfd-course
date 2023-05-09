import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contact'
import { groupsReducer } from './group'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  group: groupsReducer,
})

export const store = configureStore({
  reducer: rootReducer,

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat()
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
