"use client";

import {
  navigationFooterHeight,
  navigationHeaderHeight,
} from "@/theme/constatnt";
import { ChildrenType } from "@/types/themeTypes";
import { Box, Container } from "@mui/material";
import { use } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import TopBar from "./topBar";
import EmployeeTopBar from "./topBar";

const EmployeeLayoutWrapper = ({ children }: ChildrenType) => {
  return (
    <Box>
      <EmployeeTopBar /> 
      <Box sx={{ height: `calc(100vh - ${navigationHeaderHeight}px)` }}>
        <PerfectScrollbar>
          <Container maxWidth="xl">
            <Box sx={{ paddingY: 5 }}>{children}</Box>
          </Container> 
        </PerfectScrollbar>
      </Box>
    </Box>
  );
};

export default EmployeeLayoutWrapper;
