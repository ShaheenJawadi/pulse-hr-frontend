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
import { WpService } from "@/services/workPosition";
import { WorkPOsition } from "@/modules/WorkPosition";
type FakePOSTES = {
  id: number;
  name: string;
  nb_emps: number;
};

 

const jobTitlesMenu:ListingMenuItemType[] = [
  {
    title: "Modifier",
    icon: <EditIcon />,
  },
  {
    title: "Supprimer",
    icon: <DeleteIcon />,
  },
];

const JobTitlesList = () => {
  const { openDrawer } = useDrawerAction();

  const drawertest = () => {
    openDrawer("ADD_JOB_TITLE", null);
  };

  const { data, error, isLoading } = WpService.useListerQuery();

  return (
    <Stack spacing={3}>
      <PagerHeader title="Postes" />
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
          Ajouter un poste
        </Button>
      </Stack>
      <Box>
        <Grid container spacing={2}>
          {data?.positions?.map((item) => {
            return (
              <Grid item xs={3}>
                <CardListing  title={item.designation} subTitle={"Designation"} menulist={jobTitlesMenu}>

                  <CardItemContent single={item}/>
                </CardListing>
             
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
};

const CardItemContent = ({single}:{single:WorkPOsition}) => {
  return (
    <>
      <Box>
        <Typography variant="body1">Nombre d'employés</Typography>
        <AvatarGroup sx={{ justifyContent: "start" }} total={5}>
          <Avatar alt="name lastname" />
          <Avatar alt="name lastname" />
          <Avatar alt="name lastname" />
          <Avatar alt="name lastname" />
        </AvatarGroup>
      </Box>
      <Box>
        <Typography variant="body1">Département concerné</Typography>
        <Stack flexWrap={"wrap"} spacing={1} direction={"row"}>
          <Chip label="dep 1" variant="outlined" size="small" color="primary" />
          <Chip label="dep 1" variant="outlined" size="small"  color="primary" />
          <Chip label="dep 1" variant="outlined" size="small"  color="primary" />
          <Chip label="dep 1" variant="outlined" size="small"  color="primary" />
          <Chip label="dep 1" variant="outlined" size="small"  color="primary" />
          <Chip label="dep 1" variant="outlined" size="small"  color="primary" />
          <Chip label="dep 1" variant="outlined" size="small"  color="primary" />
          <Chip label="dep 1" variant="outlined" size="small"  color="primary" />
        </Stack>
      </Box>
    </>
  );
};
export default JobTitlesList;
