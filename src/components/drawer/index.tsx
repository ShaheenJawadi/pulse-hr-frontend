"use client";
import PerfectScrollbar from "react-perfect-scrollbar";
import { styled } from "@mui/material/styles";
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



type Props={

    isOpen : boolean ; 
    closeDrawer : ()=>void;
    children:React.ReactNode;
    drawerTitle:string;
    drawerSubtitle ?: string ;
}
const CommonDrawer = (props:Props) => {

    
  const { isOpen, closeDrawer,children , drawerTitle , drawerSubtitle } = props;

 
  return (
    <Drawer open={isOpen} hideBackdrop anchor="right" variant="temporary">
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
            {drawerTitle}
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>{drawerSubtitle}</Typography>
        </Box>
        <Box>
          <IconButton color="error"  onClick={closeDrawer}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      </Stack>

      <PerfectScrollbar>
        <Box sx={{ padding: 4, marginBottom: 10 }}>{children}</Box>
      </PerfectScrollbar>
    </Drawer>
  );
};

export default CommonDrawer;
