import { Settings, Logout } from "@mui/icons-material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
  Paper,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import Popover from "@mui/material/Popover";
import React, { useState } from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  employeeNavigationHeaderHeight,
  navigationHeaderHeight,
} from "@/theme/constatnt";
import PunchClockIcon from "@mui/icons-material/PunchClock";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import Link from "next/link";
import { ROUTING } from "@/utils/routes";
import ItemPopover from "@/components/utils/PopoverComponent";
import { useDialogAction } from "@/components/dialog/dialog.context";
import Image from "next/image";

const TopBarWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: theme.palette.background.paper, 
  height: employeeNavigationHeaderHeight,
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  padding: theme.spacing(0, 20),
  "& .MuiIconButton-root": { 
    "& .MuiSvgIcon-root": {
      fontSize: 28,
    },
  },
}));

const EmployeeTopBar = () => {
  return (
    <TopBarWrapper variant="outlined">
      <Stack spacing={15} direction={"row"}>
        <LogoComponent />
        <Stack
          flex={1}
          alignItems={"center"}
          direction={"row"}
          height={"100%"}
          justifyContent={"space-between"}
        >
          <LeftSection />
    <Box>
        sqdqs
    </Box>
          <RightSection />
        </Stack>{" "}
      </Stack>
    </TopBarWrapper>
  );
};


const LogoComponent = ( ) => {
    return (
      <Box
        sx={{ 
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      > 
          <Image src="/logo/logo.svg" width={180} height={60} alt="logo" />
    
         
      </Box>
    );
  };
  
const MenuProfile = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <IconButton onClick={handleClick} size="medium">
        <Avatar
          variant="rounded"
          src="/utils/goat.jpg"
          sx={{ width: 50, height: 50 }}
        >
          S
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={handleClose}>
          <Stack alignItems={"center"} direction={"row"} spacing={3}>
            <Avatar />
            <Stack spacing={1}>
              <Typography>Shaheen jawadi</Typography>
              <Typography variant="body2">@shaheenj</Typography>
            </Stack>
          </Stack>
        </MenuItem>

        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <AssignmentIndIcon fontSize="small" />
          </ListItemIcon>
          Mon profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Paramètres
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Déconnexion
        </MenuItem>
      </Menu>
    </Box>
  );
};

const RightSection = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <ClockInOut />
      <IconButton>
        <NotificationsIcon color="secondary" />
      </IconButton>
      <MenuProfile />
    </Stack>
  );
};

const LeftSection = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      {/*  <IconButton>
       <CalendarMonthIcon />
     </IconButton> */}
      <ItemPopover title="Bloc-notes">
        <Link href={ROUTING.UTILITIES.NOTEBOOK}>
          <IconButton>
            <StickyNote2Icon color="primary" />
          </IconButton>{" "}
        </Link>
      </ItemPopover>
      <ItemPopover title="Tâches">
        <IconButton>
          <FormatListBulletedIcon color="primary" />
        </IconButton>
      </ItemPopover>
      <ItemPopover title="Kanban">
        <Link href={ROUTING.UTILITIES.KANBAN}>
          <IconButton>
            <ViewKanbanIcon color="primary" />
          </IconButton>
        </Link>
      </ItemPopover>
    </Stack>
  );
};

const ClockInOut = () => {
  const { openDialog } = useDialogAction();

  const clockIn = () => {
    openDialog("CLOCK_IN", { id: 1 });
  };

  const clockOut = () => {
    openDialog("CLOCK_OUT", { id: 1 });
  };

  return (
    <Stack justifyContent={"center"}>
      <Button
        variant="outlined"
        size="small"
        startIcon={<PunchClockIcon />}
        color="warning"
        
        onClick={() => clockIn()}
      >
        Pointage d'entrée
      </Button>
      {/* 
         <Button
      variant="outlined"
      size="small"
      startIcon={<PunchClockIcon />}
      color="success"
      onClick={()=>clockOut()}
    >
      Pointage de sortie
    </Button>   */}
    </Stack>
  );
};
export default EmployeeTopBar;
