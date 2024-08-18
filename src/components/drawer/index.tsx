import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

import { styled, useTheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MuiDrawer, { DrawerProps } from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import { Stack } from "@mui/material";

const Drawer = styled(MuiDrawer)<DrawerProps>(({ theme }) => ({
  zIndex: theme.zIndex.modal,

  "& .MuiDrawer-paper": {
    border: 0,
    maxWidth: "90%",
    minWidth: 450,
    zIndex: theme.zIndex.modal,
    boxShadow: theme.shadows[5],
  },
}));

const CommonDrawer = () => {
  return (
    <Drawer open={true} hideBackdrop anchor="right" variant="temporary">
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        sx={{ 
          p: (theme) => theme.spacing(3.5, 5),
          borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
        }}
      >
        <Box>
          <Typography
            variant="h6"
            sx={{ fontWeight: 600, textTransform: "uppercase" }}
          >
            Tit
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>sub tit</Typography>
        </Box>
        <Box>
          <IconButton color="error">
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Stack>

      <PerfectScrollbar>
        <Box sx={{ padding: 4, marginBottom: 10 }}>content</Box>
      </PerfectScrollbar>
    </Drawer>
  );
};

export default CommonDrawer;
