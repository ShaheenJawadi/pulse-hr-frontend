"use client";

import * as React from "react";

import List from "@mui/material/List";
import { alpha, styled } from "@mui/material/styles";
import ListItem from "@mui/material/ListItem";
import ListItemButton, {
  ListItemButtonProps,
} from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navigationMenu } from "@/data/navigationMenu";
import { usePathname } from "next/navigation";
import PerfectScrollbar from "react-perfect-scrollbar";
import Link from "next/link";

type NavigationMenuType = {
  isOpen: boolean;
};

const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    margin: theme.spacing(1, 2),
    padding: 0,
    borderRadius: theme.shape.borderRadius,
    "&.selected": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
  })
) as typeof ListItemButton;

const NavigationMenu = ({ isOpen }: NavigationMenuType) => {
  const currentPath = usePathname();

  return (
    <PerfectScrollbar>
      <List>
        {navigationMenu.map((element, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <Link href={element.link}>
              <StyledListItemButton
                className={currentPath === element.link ? `selected` : ""}
                
                sx={{
                  minHeight: 48,
                  justifyContent: isOpen ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    mr: isOpen ? 3 : "auto",
                    justifyContent: "center",
                    color: "inherit",
                  }}
                >
                  <element.icon
                    fontSize="medium"
                    color="inherit"
                    sx={{ fontSize: isOpen ? null : 30 }}
                  />
                </ListItemIcon>
                <ListItemText
                  primary={element.title}
                  sx={{ display: isOpen ? "block" : "none" }}
                />
              </StyledListItemButton>{" "}
            </Link>
          </ListItem>
        ))}
      </List>
    </PerfectScrollbar>
  );
};
export default NavigationMenu;
