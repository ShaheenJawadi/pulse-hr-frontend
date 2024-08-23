import { Settings, Logout } from "@mui/icons-material";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import {
  Avatar,
  Box,
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
import React from "react";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import NotificationsIcon from "@mui/icons-material/Notifications"; 
import { navigationHeaderHeight } from "@/theme/constatnt";

const TopBarWrapper = styled(Paper)(({ theme }) => ({
  borderRadius: 0,
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.contrastText,
  height: navigationHeaderHeight+1,
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  '& .MuiIconButton-root': {
    color: '#fff', 
    '& .MuiSvgIcon-root': {
      fontSize:28,
   
  }
}
}));

const TopBar = () => {
  return (
    <TopBarWrapper variant="outlined">
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} spacing={2}>
          <IconButton  >
            <CalendarMonthIcon   />
          </IconButton>
          <IconButton  >
            <StickyNote2Icon   />
          </IconButton>
          <IconButton  >
            <FormatListBulletedIcon   />
          </IconButton>
        
        </Stack>
        <Stack direction={"row"} spacing={2}>
          <IconButton  >
            <NotificationsIcon  />
          </IconButton>
          <MenuProfile />
        </Stack>
      </Stack>
    </TopBarWrapper>
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
        <Avatar variant="rounded" sx={{ width: 40, height: 40 }}>
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

export default TopBar;
