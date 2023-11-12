import { GroupContactsDto } from 'src/types/dto/GroupContactsDto'
import { makeAutoObservable } from 'mobx'
import { DATA_GROUP_CONTACT } from 'src/__data__'

const initialState: GroupContactsDto[] = DATA_GROUP_CONTACT

export const groupsStore = makeAutoObservable({
  groups: [] as GroupContactsDto[],

  setGroups(): void {
    groupsStore.groups = initialState
  },
})
