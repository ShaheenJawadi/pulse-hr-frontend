import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
 
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton"; 
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FiberSmartRecordIcon from '@mui/icons-material/FiberSmartRecord';
import NavigationMenu from "./menu";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(12)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(18)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Navigation() {

    const [open , setOpen]= React.useState<boolean>(true);
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);  
    };
  
    const handleMouseLeave = () => {
      setIsHovered(false);  
    };
    const handleDrawerOpen = () => {
        setOpen(!open);
      };
 
  return (
    <Drawer variant="permanent" open={open || isHovered}      onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>
      <DrawerHeader>
        <IconButton  onClick={()=>handleDrawerOpen()}>

            {
                open ? <FiberSmartRecordIcon sx={{fontSize:20}} />:isHovered ?  <FiberManualRecordIcon  sx={{fontSize:20}} /> :null
            }
          
          

        </IconButton>
      </DrawerHeader>
      <Divider />
      <NavigationMenu isOpen={open  || isHovered}/>
      
    </Drawer>
  );
}
