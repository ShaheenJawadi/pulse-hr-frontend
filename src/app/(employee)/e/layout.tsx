import { Box, Container, Dialog } from "@mui/material";
import { ChildrenType } from "@/types/themeTypes";
import Navigation from "@/components/navigation";

import LayoutWrapper from "@/components/layout/layoutWrapper";
import EmployeeLayoutWrapper from "@/components/layout/employeeLayout/wrapper";

const EmployeeLayout = ({ children }: ChildrenType) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box flex={1} sx={{ overflow: "hidden" }}>
        <EmployeeLayoutWrapper> {children}</EmployeeLayoutWrapper>
      </Box>
    </Box>
  );
};

export default EmployeeLayout;
