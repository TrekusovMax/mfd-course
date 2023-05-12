import { ContactDto } from '../types/dto/ContactDto'
import { makeAutoObservable } from 'mobx'
import { FavoriteContactsDto } from 'src/types/dto/FavoriteContactsDto'

export const favoriteStore = makeAutoObservable({
  favorites: [] as FavoriteContactsDto,

  getFavorites(): FavoriteContactsDto {
    return this.favorites
  },
  isContactFavorite(id: ContactDto['id']): boolean {
    return this.favorites.includes(id)
  },
  toggleFavorite(id: ContactDto['id']) {
    const isFavorite = this.favorites.includes(id)

    if (isFavorite) {
      this.favorites = this.favorites.filter((item) => item !== id)
    } else {
      this.favorites = [...this.favorites, id]
    }
  },
})
