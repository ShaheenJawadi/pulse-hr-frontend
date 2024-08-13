import { ReactNode } from "react";
import { SvgIconProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type NavigationMenuType = {

    title: string,
    icon:  OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    link: string,

}