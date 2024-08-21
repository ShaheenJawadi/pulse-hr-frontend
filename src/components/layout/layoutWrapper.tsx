"use client";

import { ChildrenType } from "@/types/themeTypes";
import { Box, Container } from "@mui/material";
import { use } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const LayoutWrapper = ({ children }: ChildrenType) => {
  return (
    <Container maxWidth="xl" sx={{ paddingY: 5 }}>
      <PerfectScrollbar> {children}</PerfectScrollbar>
    </Container>
  );
};

export default LayoutWrapper;
