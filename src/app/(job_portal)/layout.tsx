import { Box, Container, Typography } from "@mui/material";
import { ChildrenType } from "@/types/themeTypes"; 

const Layout = async ({ children }: ChildrenType) => {
  return (
    <Box sx={{ backgroundColor: "#fff" }}  >
        <Container sx={{ paddingBottom: 5 }}>
        {children}
 
       </Container>
    </Box>
  );
};

export default Layout;
