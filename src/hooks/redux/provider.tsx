'use client'
 
import type { ReactNode } from 'react'
 
import { Provider } from 'react-redux'

import { store } from '@/hooks/redux'

const ReduxProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>
}

export default ReduxProvider
