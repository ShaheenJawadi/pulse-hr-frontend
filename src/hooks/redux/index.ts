 
import { configureStore } from '@reduxjs/toolkit'
 
import kanbanReducer from './kanban'

export const store = configureStore({
  reducer: {   kanbanReducer},
  middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
