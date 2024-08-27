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

const LayoutWrapper = ({ children }: ChildrenType) => {
  return (
    <Box>
      <TopBar />
      <Container maxWidth="xl" sx={{ height: "100vh", overflow: "hidden" }}>
        <Box sx={{ height: `calc(100vh - ${navigationHeaderHeight}px)` }}>
          <PerfectScrollbar>
            <Box sx={{ paddingY: 5}}>{children}</Box>
          </PerfectScrollbar>
        </Box>
      </Container>
    </Box>
  );
};

export default LayoutWrapper;
