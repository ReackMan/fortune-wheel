import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { accountReducer } from '@/features/account/model/slice/accountSlice'

const rootReducer = {
  account: accountReducer,
}

export const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  })

  setupListeners(store.dispatch)

  return store
}
