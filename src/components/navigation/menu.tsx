
import * as React from "react";
 

import List from "@mui/material/List";
 
import DashboardIcon from "@mui/icons-material/Dashboard";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { navigationMenu } from "@/data/navigationMenu";


type NavigationMenuType = {

    isOpen:boolean
}

const NavigationMenu = ({isOpen}:NavigationMenuType) => {

    return (
        <List>
        {navigationMenu.map((element, index) => (
          <ListItem  key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton
            href={element.link}
              sx={{
                minHeight: 48,
                justifyContent: isOpen ? 'initial' : 'center',
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{ 
                  mr: isOpen ? 3 : 'auto',
                  justifyContent: "center",
                }}
              >
               <element.icon  fontSize="medium"   sx={{ fontSize: isOpen? null  : 30  }}   />
              </ListItemIcon>
              <ListItemText primary={element.title} sx={{ display: isOpen ? "block" : "none" }}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    );
}
export default NavigationMenu;