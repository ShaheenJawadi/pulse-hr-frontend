"use client";
import React, { useState } from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import MenuOption from "@/components/listingPages/menuOptions";
import { ListingMenuItemType } from "@/types/structureTypes";

type CardListingType = {
  children: React.ReactNode;
  title: string;
  subTitle: string;
  menulist?: ListingMenuItemType[];
  avatar?: string;
  notReverse? : boolean
};
const CardListing = (props: CardListingType) => {
  const { title, subTitle, menulist, children ,avatar,notReverse} = props;

  return (
    <Card>
      <CardHeader
        className={!notReverse ?"reverse" : ""}
        title={title}
        {...(avatar && {
          avatar: (
            <Avatar sx={{ width: 50, height: 50 }} src={avatar}/>
          )
        })}

        
        subheader={subTitle}

        {...(menulist && {
          action: (
            <MenuOption menulist={menulist} />
          )
        })} 
      />
      <CardContent>
        <Stack spacing={2}>{children}</Stack>
      </CardContent>
    </Card>
  );
};
export default CardListing;
