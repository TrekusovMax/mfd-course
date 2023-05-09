import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { contactsReducer } from './contact'
import { groupsReducer } from './group'
import { favoritesReducer } from './favorites'

const rootReducer = combineReducers({
  contacts: contactsReducer,
  group: groupsReducer,
  favorites: favoritesReducer,
})

export const store = configureStore({
  reducer: rootReducer,

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat()
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof rootReducer>
