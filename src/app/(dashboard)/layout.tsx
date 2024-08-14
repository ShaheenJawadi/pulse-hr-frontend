"use client";
import { Box, Container } from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import Navigation from "@/components/navigation";
import PerfectScrollbar from "react-perfect-scrollbar";

const Layout = async ({ children }: ChildrenType) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Navigation />
      <Box flex={1}>
        <PerfectScrollbar>
          <Container maxWidth="xl" sx={{ paddingY: 5 }}>
            {children}
          </Container>
        </PerfectScrollbar> 
      </Box>
    </Box>
  );
};

export default Layout;
