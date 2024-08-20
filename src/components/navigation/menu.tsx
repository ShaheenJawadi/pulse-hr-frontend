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
import { usePathname, useRouter } from "next/navigation";
import PerfectScrollbar from "react-perfect-scrollbar";

import { NavigationMenuType } from "@/types/structureTypes";
import PanoramaFishEyeRoundedIcon from "@mui/icons-material/PanoramaFishEyeRounded";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";

const StyledListItemButton = styled(ListItemButton)<ListItemButtonProps>(
  ({ theme }) => ({
    margin: theme.spacing(1, 2),
    padding: 0,
    borderRadius: theme.shape.borderRadius,
    "&.selected:not(.sub)": {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.primary.contrastText,
    },
    "&.selected.sub": {
      color: theme.palette.primary.main,
      fontSize: 20,
    },
  })
) as typeof ListItemButton;

const NavigationMenu = ({ isOpen }: { isOpen: boolean }) => {
  const currentPath = usePathname();

  return (
    <PerfectScrollbar>
      <List>
        {navigationMenu.map((element, index) => (
          <FirstLevel
            isOpen={isOpen}
            element={element}
            currentPath={currentPath}
          />
        ))}
      </List>
    </PerfectScrollbar>
  );
};

type FirstLevelProps = {
  isOpen: boolean;
  element: NavigationMenuType;
  currentPath: string;
};

const FirstLevel = (props: FirstLevelProps) => {
  const { isOpen, element, currentPath } = props;

  const router = useRouter();
  const [showChilds, setShowChilds] = React.useState(false);

  const clickMenu = () => {
    if (!element.childs) {
      router.push(element.link);
    }
    setShowChilds(!showChilds);
  };
  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <StyledListItemButton
        className={currentPath.includes(element.link) ? `selected` : ""}
        sx={{
          minHeight: 48,
          justifyContent: isOpen ? "initial" : "center",
          px: 2.5,
        }}
        onClick={() => clickMenu()}
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
      </StyledListItemButton>

      {element.childs && showChilds && isOpen && (
        <List sx={{ marginInlineStart: 5, padding: 0 }}>
          {element.childs.map((child, index) => (
            <SecondLevel
              element={child}
              currentPath={currentPath}
              isOpen={isOpen}
            />
          ))}
        </List>
      )}
    </ListItem>
  );
};

const SecondLevel = (props: FirstLevelProps) => {
  const { isOpen, element, currentPath } = props;

  const router = useRouter();

  const clickMenu = () => {
    router.push(element.link);
  };

  const isCurrent: boolean = currentPath.includes(element.link);

  return (
    <ListItem disablePadding sx={{ display: "block" }}>
      <StyledListItemButton
        className={isCurrent ? `selected sub` : ""}
        sx={{
          minHeight: 48,
          justifyContent: isOpen ? "initial" : "center",
          px: 2.5,
        }}
        onClick={() => clickMenu()}
      >
        <ListItemIcon
          sx={{
            justifyContent: "center",
            color: "inherit",
            margin: 0,
          }}
        >
          {" "}
          {!isCurrent ? (
            <PanoramaFishEyeRoundedIcon color="inherit" sx={{ fontSize: 12 }} />
          ) : (
            <FiberManualRecordRoundedIcon
              color="inherit"
              sx={{ fontSize: 14 }}
            />
          )}
        </ListItemIcon>
        <ListItemText
          primary={element.title}
          sx={{ display: isOpen ? "block" : "none" }}
        />
      </StyledListItemButton>
    </ListItem>
  );
};
export default NavigationMenu;
