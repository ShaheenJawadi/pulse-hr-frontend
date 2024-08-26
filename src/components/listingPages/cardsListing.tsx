"use client";
import React, { ReactNode, useState } from "react";

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
  subTitle?: ReactNode;
  menulist?: ListingMenuItemType[];
  avatar?: string;
  notReverse? : boolean,
  customAction?: ReactNode;
};
const CardListing = (props: CardListingType) => {
  const { title, subTitle, menulist, children ,avatar,notReverse ,customAction} = props;

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

        {...((menulist && !customAction) && {
          action: (
            <MenuOption menulist={menulist} />
          )
        })} 
        {...(( customAction &&!menulist) && {
          action: (
            <>{customAction}</>
           
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
