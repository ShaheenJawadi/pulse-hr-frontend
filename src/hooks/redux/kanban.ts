 
import { kanbanColumn } from '@/data/kanbanFakeData'
import { createSlice } from '@reduxjs/toolkit'
 
 

export const kanbanSlice = createSlice({
  name: 'kanban',
  initialState: kanbanColumn,
  reducers: {
    moveTask: (state, action) => { 
    },

 
  }
})

export const {
    moveTask
} = kanbanSlice.actions

export default kanbanSlice.reducer
