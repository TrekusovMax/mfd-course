import { ContactDto } from 'src/types/dto/ContactDto'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'

interface FavoritesState {
  favorites: FavoriteContactsDto
}

const initialState: FavoritesState = {
  favorites: [],
}
export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<ContactDto['id']>) {
      const isFavorite = state.favorites.includes(action.payload)

      if (isFavorite) {
        state.favorites = state.favorites.filter(
          (item) => item !== action.payload,
        )
      } else {
        state.favorites = [...state.favorites, action.payload]
      }
    },
  },
})
