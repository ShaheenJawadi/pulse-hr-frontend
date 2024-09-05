import { Box, Container, Dialog } from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import Navigation from "@/components/navigation";

import LayoutWrapper from "@/components/layout/layoutWrapper";

const Layout =   ({ children }: ChildrenType) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Navigation />
      <Box flex={1} sx={{overflow: "hidden"}}>
        <LayoutWrapper> {children}</LayoutWrapper>

      </Box>
    </Box>
  );
};

export default Layout;
