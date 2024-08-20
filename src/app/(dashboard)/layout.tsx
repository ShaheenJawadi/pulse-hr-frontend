import { Box, Container, Dialog } from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import Navigation from "@/components/navigation";
import PerfectScrollbar from "react-perfect-scrollbar";
import DrawerHolder from "@/components/drawer/drawer.holder";
import DialogHolder from "@/components/dialog/dialog.holder";

const Layout = async ({ children }: ChildrenType) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Navigation />
      <Box flex={1}>
        {/*   <PerfectScrollbar> */}

        <Container maxWidth="xl" sx={{ paddingY: 5 }}>
          {children}
        </Container>
        <DrawerHolder />
        <DialogHolder />
        {/* </PerfectScrollbar> */}
      </Box>
    </Box>
  );
};

export default Layout;
