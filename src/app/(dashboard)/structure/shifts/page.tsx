"use client";
import React, { useState } from "react";

import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Chip,
  Divider,
  Grid,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import PagerHeader from "@/components/listingPages/pageHeader";
import MenuOption from "@/components/listingPages/menuOptions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDrawerAction } from "@/components/drawer/drawer.context";
import { ListingMenuItemType } from "@/types/structureTypes";
import CardListing from "@/components/listingPages/cardsListing";
import { time } from "console";
type FakePOSTES = {
  id: number;
  name: string;
  nb_emps: number;
};

const WorkingShiftsMenu: ListingMenuItemType[] = [
  {
    title: "Modifier",
    icon: <EditIcon />,
  },
  {
    title: "Supprimer",
    icon: <DeleteIcon />,
  },
];

const WorkingShiftsList = () => {
  const { openDrawer } = useDrawerAction();

  const drawertest = () => {
    openDrawer("ADD_WORKING_SHIFT", null);
  };

  return (
    <Stack spacing={3}>
      <PagerHeader title="Heures de Travail" />
      <Stack
        className="topContent"
        spacing={2}
        direction={"row"}
        justifyContent={"flex-end"}
      >
        <Button
          startIcon={<AddIcon />}
          size="large"
          variant="contained"
          onClick={drawertest}
        >
          Ajouter des heures de travail
        </Button>
      </Stack>
      <Box>
        <Grid container spacing={2}>
          {["Heures de travail normales", "Horaires de travail du Ramadan", "Quart de Matin", "Quart de Soir ","Quart de Nuit"].map((item) => {
            return (
              <Grid item xs={4}>
                <CardListing
                  title={item}
                  subTitle={""}
                  menulist={WorkingShiftsMenu}
                >
                  <CardItemContent />
                </CardListing>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
};

const CardItemContent = () => {
  const fakeShifts = [
    {
      day: "Lundi",
      time: "09 - 17:30",
    },
    {
      day: "Mardi",
      time: "08 - 17:30",
    },
    {
      day: "Mercredi",
      time: "13 - 17:30",
    },
    {
      day: "Jeudi",
      time: "09 - 18:00",
    },
    {
      day: "Vendredi",
      time: "8 - 15:30",
    },
    {
      day: "Samedi",
      time: "9 - 12:30",
    },
  ];
 

  return (
    <>
      <Stack
        divider={<Divider orientation="horizontal" flexItem />}
        spacing={0}
      >
        {fakeShifts.map((shift) => (
          <Stack
            alignItems="center"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={10}
            direction={"row"}
          >
            <Typography flex={1} variant="body1">
              {shift.day}
            </Typography>
            <Typography color={"secondary"} flex={1} variant="body1">
              {shift.time}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </>
  );
};

export default WorkingShiftsList;
