"use client";
import { Box, Stack } from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
const KanbanPage = () => {
  return (
    <Box>
    <PerfectScrollbar dir="horizontal">
 
      <Stack direction={"row"} spacing={4}>
        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>
        
        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>

        <Box minWidth={250}>Col</Box>
      </Stack>
    </PerfectScrollbar>
    </Box>  
  );
};

export default KanbanPage;
