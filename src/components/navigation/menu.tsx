
import * as React from "react";
 

import List from "@mui/material/List";
 
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navigationMenu } from "@/data/navigationMenu";

const NavigationMenu = () => {

    return (
        <List>
        {navigationMenu.map((element, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
            href={element.link}
              sx={{
                minHeight: 48,
                justifyContent: "initial",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: 3,
                  justifyContent: "center",
                }}
              >
               <element.icon/>
              </ListItemIcon>
              <ListItemText primary={element.title} sx={{ opacity: 1 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
}
export default NavigationMenu;