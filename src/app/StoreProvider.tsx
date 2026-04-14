'use client'

import { ReactNode, useRef } from 'react'

import { Provider } from 'react-redux'

import { makeStore } from '@/store/store'
import { AppStore } from '@/store/types'

export function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore>(undefined)

  // eslint-disable-next-line react-hooks/refs
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  // eslint-disable-next-line react-hooks/refs
  return <Provider store={storeRef.current}>{children}</Provider>
}
