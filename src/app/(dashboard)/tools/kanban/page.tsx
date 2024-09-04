"use client";

import React, { useState } from "react";
import { Box, Button, Stack } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { kanbanColumn as initialColumns } from "@/data/kanbanFakeData";
import { KanbanTasksType, KanbanColumnType } from "@/types/kanbanTypes";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanColumns from "@/components/pages/kanban/columns";
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from "@/hooks/redux";
import { moveTask } from "@/hooks/redux/kanban";

const KanbanPage = () => {
 


  const kanbanStore = useSelector((state: RootState) => state.kanban)
  const dispatch = useDispatch()

 
  
  const onDragEnd = (result:any) => {
    const { source, destination,draggableId } = result;


    console.log(result);
    if (!destination) return;

    if (source.droppableId === destination.droppableId) { 
     console.log('same column');
    } else { 
        dispatch(moveTask({currentTask:draggableId, destinationColumn:destination.droppableId , sourceColumn:source.droppableId}))  
 
    }
  };
 

  return ( 
    <DragDropContext onDragEnd={onDragEnd}>
      
      <Box>
        <PerfectScrollbar dir="horizontal">
          <Stack direction={"row"} spacing={4}>
            {kanbanStore.map((column) => (
              <Droppable droppableId={`${column.id}`} key={column.id} type="TASK">
                {(provided) => (
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    <KanbanColumns column={column} tasks={column?.tasks || []} />
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            ))}
          </Stack>
        </PerfectScrollbar>
      </Box>
    </DragDropContext> 
  );
};

export default KanbanPage;
 