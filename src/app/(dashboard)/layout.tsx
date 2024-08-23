import { Box, Container, Dialog } from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import Navigation from "@/components/navigation";

import DrawerHolder from "@/components/drawer/drawer.holder";
import DialogHolder from "@/components/dialog/dialog.holder";
import LayoutWrapper from "@/components/layout/layoutWrapper";

const Layout = async ({ children }: ChildrenType) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Navigation />
      <Box flex={1} sx={{overflow: "hidden"}}>
        <LayoutWrapper> {children}</LayoutWrapper>

        <DrawerHolder />
        <DialogHolder />
      </Box>
    </Box>
  );
};

export default Layout;
