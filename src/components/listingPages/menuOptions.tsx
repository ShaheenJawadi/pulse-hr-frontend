import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import { styled } from "@mui/material";

const StyledMenu = styled((props: MenuProps) => (
    <Menu
        elevation={0}
        anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
        }}
        transformOrigin={{
        vertical: "top",
        horizontal: "right",
        }}
        {...props}
    />
    ))(({ theme }) => ({
    "& .MuiPaper-root": { 
        minWidth: 180,

        "& .MuiMenu-list": {
        padding: "4px 0",
        },
        "& .MuiMenuItem-root": {
        "& .MuiSvgIcon-root": {
            fontSize: 21,
            color: theme.palette.primary.main,
            marginRight: theme.spacing(1.5),
        },
        },
    },
    }));

const options = ["op1 kjhck", "op2 iopbn"];
type Props = {

menulist:
    {title: string;
    icon: React.ReactElement;}[]


}

const MenuOption = (props :Props) => {
    const {menulist} = props;
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
      <IconButton
        sx={{ color: "var(--mui-palette-primary-dark)" }}
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <StyledMenu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        {menulist.map((option) => (
          <MenuItem key={option.title} onClick={handleClose}>
            {option.icon} 
            {option.title}
          </MenuItem>
        ))}
      </StyledMenu>
    </div>
  );
};

export default MenuOption;
