import { Box, Popover, Typography } from "@mui/material";
import { useState } from "react";

type HoverPopoverProps={
    children: React.ReactElement;
    title: React.ReactNode;
  }
  
  const ItemPopover  = ({ children, title }:HoverPopoverProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  
    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
    setAnchorEl(null);  
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <Box onMouseEnter={handlePopoverOpen} onMouseLeave={handlePopoverClose}>
        {children}
        <Popover
        
          sx={{ pointerEvents: 'none' }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
          <Typography variant="body2" padding={1}>{title}</Typography>
        </Popover>
      </Box>
    );
  };



  export default ItemPopover;