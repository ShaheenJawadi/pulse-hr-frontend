import { ReactElement, ReactNode } from "react";
import { SvgIconProps, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from "@mui/material/OverridableComponent";

export type NavigationMenuType = {

    title: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>,
    link: string,
    childs?: NavigationMenuType[];

}


export type ListingMenuItemType = {
    title: string;
    icon: React.ReactElement
}


export type StepperFormType = {
    label: string,
    componentPage: ReactNode

}