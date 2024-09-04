
import { configureStore } from '@reduxjs/toolkit'

import kanban from './kanban'

export const store = configureStore({
  reducer: { kanban },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>