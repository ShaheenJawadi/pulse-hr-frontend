"use client";

import {
  navigationFooterHeight,
  navigationHeaderHeight,
} from "@/theme/constatnt";
import { ChildrenType } from "@/types/themeTypes";
import { Box, Container } from "@mui/material";
import { use } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const LayoutWrapper = ({ children }: ChildrenType) => {
  return (
    <Container maxWidth="xl" sx={{ height: "100vh", overflow: "hidden" }}>
      <Box sx={{ height: `calc(100vh - ${navigationHeaderHeight}px)` }}>
        <PerfectScrollbar>
          <Box sx={{ paddingY: 5 }}>{children}</Box>
        </PerfectScrollbar>
      </Box>
    </Container>
  );
};

export default LayoutWrapper;
