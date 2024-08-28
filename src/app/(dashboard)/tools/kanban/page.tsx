"use client";
import KanbanColumns from "@/components/pages/kanban/columns";
import { Box, Stack } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
const KanbanPage = () => {
  return (
    <Box>
    <PerfectScrollbar dir="horizontal">
 
      <Stack direction={"row"} spacing={4}>

        {
            [1,2,3].map((item, index) => {
                return (
                    <KanbanColumns/>
                )
            })
        }
    
      </Stack>
    </PerfectScrollbar>
    </Box>  
  );
};

export default KanbanPage;
