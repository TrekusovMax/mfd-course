import { contactsSlice } from './slice'

export const contactsReducer = contactsSlice.reducer

export const { findByName, getState } = contactsSlice.actions
