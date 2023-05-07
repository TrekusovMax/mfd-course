import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { DATA_CONTACT } from 'src/__data__'
import { FilterFormValues } from 'src/components/FilterForm'
import { ContactDto } from 'src/types/dto/ContactDto'

export const contactsSlice = createSlice({
  name: 'contact',
  initialState: DATA_CONTACT,
  reducers: {
    getState() {
      return DATA_CONTACT
    },
    findByName(
      state,
      action: PayloadAction<Partial<FilterFormValues['name']>>,
    ) {
      const fvName = action.payload.toLowerCase()

      state =
        action.payload !== ''
          ? DATA_CONTACT.filter(
              ({ name }) => name.toLowerCase().indexOf(fvName) > -1,
            )
          : DATA_CONTACT

      return state
    },
  },
})
