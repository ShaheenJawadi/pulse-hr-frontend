import { Box, Button, Divider, Menu, MenuItem, Stack } from "@mui/material";
import { employeeNavigationMenu } from "./navigationList";
import React from "react";
import { NavigationMenuType } from "@/types/structureTypes";

const EmployeeNavigation = () => {
  return (
    <Box  >
      <Stack spacing={3} direction={"row"} paddingY={3}>
        {employeeNavigationMenu.map((item, index) => (
            
                item.childs ?    <SingleNavigationMenu element={item}/> :  <SingleNavigationBtn element={item}/>
            
       
        ))}
      </Stack>

      <Divider />
    </Box>
  );
};
type SingleNavsProps = { 
    element: NavigationMenuType; 
  };
  
const SingleNavigationBtn = ({element }:SingleNavsProps) => {
 
  return (
    <>
      <Button  
      size="large"
        color="secondary"
        startIcon={<element.icon />}    
        href={element.link}
      >
        {element.title}
      </Button>
     
    </>
  );
};
const SingleNavigationMenu = ({element }:SingleNavsProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <>
      <Button 
        onClick={handleClick}
        color="secondary"
      >
             {element.title}
      </Button>
      <Menu 
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose} 
      >
        {
            element.childs?.map((item, index) => (<MenuItem href={item.link} onClick={handleClose}>{item.title} </MenuItem>))
        }
        
 
      </Menu>
    </>
  );
};
export default EmployeeNavigation;
