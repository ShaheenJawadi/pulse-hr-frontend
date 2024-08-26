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
      <PagerHeader title="Recrutement" />
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
  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="body1">
          SHORT DESC SHORT DESC SHORT DESC SHORT DESC SHORT DESC SHORT DESC
          SHORT DESC SHORT DESC SHORT DESC{" "}
        </Typography>
      </Box>
      <Box>
        <Chip variant="filled" size="small" color="secondary" label="tag1" />
        <Chip variant="outlined" size="small" color="secondary" label="tag2" />
      </Box>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Stack direction={"row"}>
          <LocationOnTwoToneIcon color="success" />
          <Typography variant="body1">Tunisie , tunis</Typography>
        </Stack>

        <Box>
          <Typography variant="body2">Posté depuis 2 jours</Typography>
        </Box>
      </Stack>

      <Divider />
      <Box>
        <Typography>Candidatures:</Typography>

        <Stack spacing={1}>
          <Stack spacing={4} direction={"row"} alignItems={"center"}>
            <Typography variant="body1" color={"secondary"}>
              Total
            </Typography>
            <Divider sx={{ flex: 1 }} />

            <Typography variant="body1" fontSize={20} color={"primary"}>
              15
            </Typography>
          </Stack>
          <Stack spacing={4} direction={"row"} alignItems={"center"}>
            <Typography variant="body1" color={"secondary"}>
              Présélectionné
            </Typography>
            <Divider sx={{ flex: 1 }} />

            <Typography variant="body1" fontSize={20} color={"success"}>
              2
            </Typography>
          </Stack>

          <Stack spacing={4} direction={"row"} alignItems={"center"}>
            <Typography variant="body1" color={"secondary"}>
              Refusées
            </Typography>
            <Divider sx={{ flex: 1 }} />

            <Typography variant="body1" fontSize={20} color={"error"}>
              10
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default RecrutementPage;
