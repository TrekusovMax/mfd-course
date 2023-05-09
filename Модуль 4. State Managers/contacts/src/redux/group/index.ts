import { groupsSlice } from './slice'

export const groupsReducer = groupsSlice.reducer

export const { getGroupsList } = groupsSlice.actions
