
import { configureStore } from '@reduxjs/toolkit'

import kanbanReducer  from './kanban'

export const store = configureStore({
  reducer: {kanban: kanbanReducer  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>