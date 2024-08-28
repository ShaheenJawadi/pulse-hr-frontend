"use client";

import React, { useState } from "react";
import { Box, Stack } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { kanbanColumn as initialColumns, kanbanTasks as initialTasks } from "@/data/kanbanFakeData";
import { KanbanTasksType, KanbanColumnType } from "@/types/kanbanTypes";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import KanbanColumns from "@/components/pages/kanban/columns";

const KanbanPage = () => {
  const [columns, setColumns] = useState<KanbanColumnType[]>(initialColumns);
  const [tasks, setTasks] = useState<KanbanTasksType[]>(initialTasks);

  const onDragEnd = (result:any) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) { 
      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(source.index, 1);
      updatedTasks.splice(destination.index, 0, movedTask);
      setTasks(updatedTasks);
    } else { 
      const updatedTasks = [...tasks];
      const [movedTask] = updatedTasks.splice(source.index, 1);
      movedTask.columnId = parseInt(destination.droppableId);
      updatedTasks.splice(destination.index, 0, movedTask);
      setTasks(updatedTasks);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box>
        <PerfectScrollbar dir="horizontal">
          <Stack direction={"row"} spacing={4}>
            {columns.map((column) => (
              <Droppable droppableId={`${column.id}`} key={column.id} type="TASK">
                {(provided) => (
                  <Box {...provided.droppableProps} ref={provided.innerRef}>
                    <KanbanColumns column={column} tasks={tasks} />
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
