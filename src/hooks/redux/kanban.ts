
import { kanbanColumn } from '@/data/kanbanFakeData'
import { KanbanTasksType, KanbanColumnType } from '@/types/kanbanTypes';
import { createSlice } from '@reduxjs/toolkit'



 
export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState:{ kanbanData:kanbanColumn as KanbanColumnType[]},
    reducers: {
        moveTask: ( state ,action) => {
            const { currentTask, destinationColumn, sourceColumn, newOrder } = action.payload;

            let newKanbanData = state.kanbanData;

            const updateDisplayOrder = (tasks: KanbanTasksType[]) => {
                tasks.forEach((task, index) => {
                    task.displayOrder = index;
                });
            };

            const source = newKanbanData.find(column => column.id == sourceColumn);
            const taskToMove = source?.tasks?.splice(
                source?.tasks?.findIndex(task => task.id == currentTask) ?? -1,
                1
            )[0];

            if (!source || !taskToMove) {
                console.error('err1');
                return newKanbanData;
            }

            updateDisplayOrder(source?.tasks ?? []);

            const destination = newKanbanData.find(column => column.id == destinationColumn);
            if (!destination || !destination.tasks) {
                console.error('err2');
                return newKanbanData;
            }

            taskToMove.columnId = destinationColumn;
            taskToMove.displayOrder = newOrder;
            destination.tasks.push(taskToMove);

            destination.tasks.sort((a, b) => a.displayOrder - b.displayOrder);
            updateDisplayOrder(destination.tasks);
            state.kanbanData = newKanbanData;
            return state;
         
        },



    }
})

export const {
    moveTask
} = kanbanSlice.actions

export default kanbanSlice.reducer
