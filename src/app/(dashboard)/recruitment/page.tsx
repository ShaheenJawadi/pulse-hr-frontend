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
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import LocationOnTwoToneIcon from "@mui/icons-material/LocationOnTwoTone";

import { ListingMenuItemType, SelectDataTypes } from "@/types/structureTypes";
import PreviewIcon from "@mui/icons-material/Preview";
import CardListing from "@/components/listingPages/cardsListing";
import LanguageIcon from "@mui/icons-material/Language";
import { SelectField } from "@/components/utils/SelectField";
import Link from "next/link";
import { ROUTING } from "@/utils/routes";
import SingleJobGrid from "@/components/pages/recruitement/SingleJobGrid";
type FakePOSTES = {
  id: number;
  name: string;
  nb_emps: number;
};

const jobTitlesMenu: ListingMenuItemType[] = [
  {
    title: "Aperçu",
    icon: <LanguageIcon />,
  },
  {
    title: "Candidatures",
    icon: <PreviewIcon />,
    link: ROUTING.RECRUTEMENT.APPLICATIONS("1"),
  },
  {
    title: "Désactiver",
    icon: <DoNotDisturbAltIcon />,
  },
  {
    title: "Supprimer",
    icon: <DeleteIcon />,
  },
];

const RecrutementPage = () => {
  const orderByList: SelectDataTypes[] = [
    {
      labelText: "Plus récent",
      value: 0,
    },
    {
      labelText: "Plus ancien",
      value: 1,
    },
  ];
  return (
    <Stack spacing={3}>
      <PagerHeader title="Offre d'emploi" />
      <Stack
        className="topContent"
        spacing={2}
        direction={"row"}
        justifyContent={"space-between"}
      >
        <Box minWidth={200}>
          <SelectField
            size="small"
            label={"Trier par"}
            selectData={orderByList}
          />
        </Box>
        <Link href={ROUTING.RECRUTEMENT.ADDJOB}>
          <Button startIcon={<AddIcon />} size="large" variant="contained">
            Ajouter une offre d'emploi
          </Button>
        </Link>
      </Stack>

      <Box>
        <Grid container spacing={2}>
          {[1, 2, 3].map((item) => {
            return (
              <Grid item xs={4}>
               
                  <CardListing title={"jobtitle"} menulist={jobTitlesMenu}>
                    <SingleJobGrid />
                  </CardListing> 
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
};
 
export default RecrutementPage;
