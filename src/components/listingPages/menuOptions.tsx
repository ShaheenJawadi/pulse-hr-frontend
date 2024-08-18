import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

const options = [
  'op1 kjhck',
  'op2 iopbn',

  
];
 

const MenuOption=()=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton  sx={{color:"var(--mui-palette-primary-dark)"}}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu 
        
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
      >
        {options.map((option) => (
          <MenuItem key={option}  onClick={handleClose}>
            <EditOutlinedIcon/>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}


export default MenuOption;