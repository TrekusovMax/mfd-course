import { DATA_CONTACT } from 'src/__data__'
import { FilterFormValues } from './../components/FilterForm'
import { ContactDto } from './../types/dto/ContactDto'
import { makeAutoObservable } from 'mobx'
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'

const initialState: ContactDto[] = DATA_CONTACT

export const contactsStore = makeAutoObservable({
  contacts: [] as ContactDto[],

  getAllContacts(): ContactDto[] {
    return initialState
  },

  setContacts(): void {
    contactsStore.contacts = initialState
  },
  searchByName(name: Partial<FilterFormValues['name']>): ContactDto[] {
    const fvName = name.toLowerCase()
    this.contacts = initialState.filter(
      ({ name }) => name.toLowerCase().indexOf(fvName) > -1,
    )

    return this.contacts
  },
  searchByGroup(groupId: Partial<GroupContactsDto>) {
    this.contacts = this.contacts.filter(({ id }) =>
      groupId.contactIds!.includes(id),
    )

    return this.contacts
  },
})
