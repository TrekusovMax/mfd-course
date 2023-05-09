import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DATA_CONTACT } from 'src/__data__'
import { FilterFormValues } from 'src/components/FilterForm'

import { ContactDto } from 'src/types/dto/ContactDto'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

const initialState: ContactDto[] = DATA_CONTACT

export const contactsSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    getContactsList() {
      return initialState
    },
    searchByName(
      state,
      action: PayloadAction<Partial<FilterFormValues['name']>>,
    ) {
      const fvName = action.payload.toLowerCase()
      state = initialState.filter(
        ({ name }) => name.toLowerCase().indexOf(fvName) > -1,
      )

      return state
    },
    searchByGroup(state, action: PayloadAction<Partial<GroupContactsDto>>) {
      state = state.filter(({ id }) => action.payload.contactIds!.includes(id))

      return state
    },
  },
})
