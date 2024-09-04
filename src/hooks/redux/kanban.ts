
import { kanbanColumn } from '@/data/kanbanFakeData'
import { KanbanTasksType, KanbanColumnType } from '@/types/kanbanTypes';
import { createSlice } from '@reduxjs/toolkit'



export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState: kanbanColumn as KanbanColumnType[],
    reducers: {
        moveTask: (state, action) => {



            const { currentTask, destinationColumn, sourceColumn } = action.payload;
            const kanbanData = state as KanbanColumnType[];


            const source = kanbanData.find(column => column.id == sourceColumn);
            if (!source) {
                console.log('error 1')
                return;
            }


            const taskIndex = source.tasks?.findIndex(task => task.id == currentTask);
            if (taskIndex === -1) {
                console.log('error 2')
                return;
                    


            }

            const [taskToMove] = source.tasks?.splice(taskIndex || 0, 1) || [];

            const destination = kanbanData.find(column => column.id == destinationColumn);
            if (!destination) {
                console.log('error 3')
                return;


            }

            taskToMove.columnId = destinationColumn;
            destination?.tasks?.push(taskToMove);

            state = kanbanData;
        },



    }
})

export const {
    moveTask
} = kanbanSlice.actions

export default kanbanSlice.reducer
