"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Image from "next/image";

import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import FiberSmartRecordIcon from "@mui/icons-material/FiberSmartRecord";
import NavigationMenu from "./menu";
import { Box, Stack, Typography } from "@mui/material";
import { navigationFooterHeight, navigationHeaderHeight } from "@/theme/constatnt";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "unset",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "unset",
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
  "& .MuiPaper-root": {
    overflowY: "unset",
    maxHeight: "100vh",
  },
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
  const [open, setOpen] = React.useState<boolean>(true);
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
    <Drawer
      variant="permanent"
      open={open || isHovered}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <DrawerHeader sx={{height:navigationHeaderHeight}}>
        <Stack direction={"row"} flex={1} justifyContent={"space-between"}>
          <LogoComponent isOpen={open || isHovered} />

          {open ? (
            <IconButton onClick={() => handleDrawerOpen()}>
              <FiberSmartRecordIcon sx={{ fontSize: 20 }} />{" "}
            </IconButton>
          ) : isHovered ? (
            <IconButton onClick={() => handleDrawerOpen()}>
              <FiberManualRecordIcon sx={{ fontSize: 20 }} />{" "}
            </IconButton>
          ) : null}
        </Stack>
      </DrawerHeader>
      <Divider />
      <Stack height={"100%"}>
        <Box flex={1} sx={{maxHeight: `calc(100vh - ${navigationFooterHeight+navigationHeaderHeight+5}px)`}}>
          <NavigationMenu isOpen={open || isHovered} />
        </Box>
        <Box height={navigationFooterHeight}>
          {(open || isHovered) && (
            <Stack spacing={2} alignItems={"center"}>
              <Image
                src="/telnet/logo.webp"
                width={120}
                height={30}
                alt="telnet logo"
              />
              <Typography variant="caption">
                © 2024 TELNET. Tous droits réservés.
              </Typography>
            </Stack>
          )}
        </Box>
      </Stack>
    </Drawer>
  );
}

const LogoComponent = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      flex={1}
    >
      {isOpen ? (
        <Image src="/logo/logo.svg" width={180} height={60} alt="logo" />
      ) : (
        <Image src="/logo/logo_sx.svg" width={50} height={50} alt="logo" />
      )}
    </Box>
  );
};
