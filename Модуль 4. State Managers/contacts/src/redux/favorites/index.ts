import { favoritesSlice } from './slice'

export const favoritesReducer = favoritesSlice.reducer

export const { toggleFavorite } = favoritesSlice.actions
