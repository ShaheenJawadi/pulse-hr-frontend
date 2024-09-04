
import { kanbanColumn } from '@/data/kanbanFakeData'
import { KanbanService } from '@/services/utils/kanban';
import { KanbanTasksType, KanbanColumnType } from '@/modules/kanabn'; 
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from "react-toastify";

const saveData =(d:string)=>{
  const  data= JSON.parse(d);

 
  KanbanService.update(data).then((res) => {
   
    if(res.success){
        toast.success("kanban mis à jour avec succès");
    }else{
        toast.error("Erreur");
    }

  }).catch((err) => { 
    toast.error("Erreur");
  })
     
  
}

export const fetchKanbanData = createAsyncThunk('kanban/fetchKanbanData', async () => {
    const data= KanbanService.fetchKanbanList();
     
    return data;
  });

  /* kanbanData:kanbanColumn */

export const kanbanSlice = createSlice({
    name: 'kanban',
    initialState:{ kanbanData:[] as KanbanColumnType[]},
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

            taskToMove.column_id = destinationColumn;
            taskToMove.displayOrder = newOrder;
            destination.tasks.push(taskToMove);

            destination.tasks.sort((a, b) => a.displayOrder - b.displayOrder);
            updateDisplayOrder(destination.tasks);
            state.kanbanData = newKanbanData;
        
            saveData(JSON.stringify(newKanbanData))
            return state;
         
        },



    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchKanbanData.pending, (state) => {
 
          console.log("pending")
        })
        .addCase(fetchKanbanData.fulfilled, (state, action) => {
          state.kanbanData = action.payload;
          console.log(action.payload)
    
         
        })
        .addCase(fetchKanbanData.rejected, (state, action) => {
            console.log('rejected')
           
        });

    }
})

export const {
    moveTask
} = kanbanSlice.actions

export default kanbanSlice.reducer
