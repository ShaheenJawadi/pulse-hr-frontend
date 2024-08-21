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
  menulist: ListingMenuItemType[];
};
const CardListing = (props: CardListingType) => {
  const { title, subTitle, menulist, children } = props;

  return (
    <Card>
      <CardHeader
        className="reverse"
        title={title}
        subheader={subTitle}
        action={<MenuOption menulist={menulist} />}
      />
      <CardContent>
        <Stack spacing={2}>{children}</Stack>
      </CardContent>
    </Card>
  );
};
export default CardListing;