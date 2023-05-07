import {
  useStore,
  useSelector,
  TypedUseSelectorHook,
  useDispatch,
} from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { AnyAction } from 'redux'

import { RootState } from './store'

export const useAppDispatch = useDispatch<
  ThunkDispatch<RootState, void, AnyAction>
>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppStore = useStore<RootState>
