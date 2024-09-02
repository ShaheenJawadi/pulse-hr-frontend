"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  Chip,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material"; 
import AddIcon from "@mui/icons-material/Add";
import PagerHeader from "@/components/listingPages/pageHeader";
import MenuOption from "@/components/listingPages/menuOptions";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useDrawerAction } from "@/components/drawer/drawer.context";
import { ListingMenuItemType } from "@/types/structureTypes";
import CardListing from "@/components/listingPages/cardsListing";
import { DepService } from "@/services/department";
import { Department } from "@/modules/Department";
type FakeDepartment = {
  id: number;
  name: string;
  manger_name: string;
  manger_img: string;
  nb_emps: number;
};

const data: FakeDepartment[] = [
  {
    id: 1,
    name: "Shaheen",
    manger_name: "Jawadi",
    manger_img: "",
    nb_emps: 54,
  },
];

const departementMenu: ListingMenuItemType[] = [
  {
    title: "Détails",
    icon: <InfoIcon />,
  },
  {
    title: "Modifier",
    icon: <EditIcon />,
  },
  {
    title: "Supprimer",
    icon: <DeleteIcon />,
  },
];


const MyTable = () => {

  const { data, error, isLoading } = DepService.useDepartmentListQuery();


 
  return (
    <Stack spacing={3}>
      <PagerHeader title="Départements" />
      <TableUtils />
      <Grid container spacing={2}>
        {data?.departments.map((item) => {
          return <DepartmentCard department={item} />;
        })}
      </Grid>
    </Stack>
  );
};

const TableUtils = () => {
  const { openDrawer } = useDrawerAction();

  const addBtn = () => {
    openDrawer("ADD_DEPARTMENT", null);
  };

  return (
    <Stack spacing={2} direction={"row"} justifyContent={"flex-end"}>
      <Button
        startIcon={<AddIcon />}
        size="large"
        variant="contained"
        onClick={addBtn}
      >
        Ajouter un département
      </Button>
    </Stack>
  );
};

const DepartmentCard = ({department}:{department:Department}) => {
  return (
    <Grid item xs={3}>
      <CardListing
        menulist={departementMenu}
        title={department.name}
        notReverse={true}
      >
        <Stack spacing={2} alignItems={"center"}>
          <Box>
            <Card
              color={"secondary"}
              variant="lightone"
              sx={{
                padding: 2,
                backgroundColor: "secondary",
                width: "fit-content",
                minWidth: 300,
              }}
            >
              <Stack direction={"row"} spacing={4}>
                <Box>
                  <Avatar
                    sx={{ width: 60, height: 60 }}
                    variant="rounded"
                    src={"/utils/goat.jpg"}
                  />
                </Box>
                <Stack spacing={1}>
                  <Typography variant="body2" color={"secondary"}>
                    Manager:{" "}
                  </Typography>
                  <Typography> nom & prenom</Typography>
                </Stack>
              </Stack>
            </Card>
          </Box>
          <AvatarGroup sx={{ justifyContent: "start" }} total={10}>
            <Avatar sx={{bgcolor:"var(--mui-palette-secondary-main)"}} alt="name lastname"  />
            <Avatar sx={{bgcolor:"var(--mui-palette-error-main)"}}  alt="name lastname" />
            <Avatar sx={{bgcolor:"var(--mui-palette-warning-main)"}}  alt="name lastname" />
            <Avatar sx={{bgcolor:"var(--mui-palette-success-main)"}}  alt="name lastname" />
            <Avatar sx={{bgcolor:"var(--mui-palette-primary-main)"}}  alt="name lastname" /> 
          </AvatarGroup>
        </Stack>
      </CardListing>
    </Grid>
  );
};
export default MyTable;
