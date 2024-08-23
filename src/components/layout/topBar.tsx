import { Settings, Logout } from "@mui/icons-material";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
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
  Typography,
} from "@mui/material";
import React from "react";

const TopBar = () => {


  return (
    <Paper variant="elevation" sx={{ marginTop: 5, padding: 4 }}>
      <Stack
        alignItems={"center"}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Box>sqdqs</Box>
        <Box>
          <MenuProfile />
        </Box>
      </Stack>
    </Paper>
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
        <Avatar sx={{ width: 32, height: 32 }}>S</Avatar>
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
