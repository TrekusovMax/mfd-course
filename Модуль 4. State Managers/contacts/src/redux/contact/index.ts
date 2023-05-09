import { contactsSlice } from './slice'

export const contactsReducer = contactsSlice.reducer

export const { searchByName, getContactsList, searchByGroup } =
  contactsSlice.actions
