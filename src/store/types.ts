'use client'

import { useDispatch, useSelector, useStore } from 'react-redux'

import { AccountSchema } from '@/features/account/model/types/types'
import { makeStore } from '@/store/store'

export type AppStore = ReturnType<typeof makeStore>
export type AppRootState = ReturnType<AppStore['getState']>

export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<AppRootState>()
export const useAppStore = useStore.withTypes<AppStore>()
export type StateSchema = {
  account: AccountSchema
}
