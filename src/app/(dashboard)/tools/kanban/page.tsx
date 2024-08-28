"use client";
import KanbanColumns from "@/components/pages/kanban/columns";
import { Box, Stack } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";

import React  from "react";
import { kanbanColumn, kanbanTasks } from "@/data/kanbanFakeData";
import { KanbanTasksType, KanbanColumnType } from "@/types/kanbanTypes";
 

const KanbanPage = () => {
 

  return (
    <Box>
      <PerfectScrollbar dir="horizontal">
        <Stack direction={"row"} spacing={4}>
          {kanbanColumn.map((column) => (
            <Box  >
              <KanbanColumns
                column={column}
                tasks={kanbanTasks as KanbanTasksType[]} 
              />
            </Box>
          ))}
        </Stack>
      </PerfectScrollbar>
    </Box>
  );
};

export default KanbanPage;
