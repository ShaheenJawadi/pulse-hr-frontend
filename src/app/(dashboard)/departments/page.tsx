"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import GeneralTable from "@/ui/table/mainTable";

import PagerHeader from "@/components/listingPages/pageHeader";
import MenuOption from "@/components/listingPages/menuOptions";
import { title } from "process";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import { useDrawerAction } from "@/components/drawer/drawer.context";
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

const departementMenu = [
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

const columns: ColumnDef<FakeDepartment>[] = [
  {
    header: "Designation",
    accessorKey: "name",
    cell: ({ getValue }) => <strong>{getValue<string>()}</strong>,
  },

  {
    header: "Manager",
    accessorKey: "lastName",
    cell: ({ getValue }) => (
      <Stack
        direction={"row"}
        spacing={2}
        alignItems={"center"}
        style={{ color: "var(--mui-palette-primary-main)" }}
      >
        <Avatar alt="name lastname" sx={{ width: 30, height: 30 }} />
        <Typography variant="body1"> name lastname</Typography>
      </Stack>
    ),
  },
  {
    header: "Eemployés",
    accessorKey: "nb_emps",
    cell: ({ getValue }) => (
      <AvatarGroup sx={{ justifyContent: "start" }} total={getValue<number>()}>
        <Avatar alt="name lastname" />
        <Avatar alt="name lastname" />
        <Avatar alt="name lastname" />
        <Avatar alt="name lastname" />
      </AvatarGroup>
    ),
  },
  {
    header: "Actions",
    accessorKey: "action",
    cell: ({ row }) => <MenuOption menulist={departementMenu} />,
    enableSorting: false,
  },
];

const MyTable = () => {
  const { openDrawer } = useDrawerAction();

  const drawertest = () => {
    openDrawer('test drawer');
  }



  return (
    <Stack spacing={3}>

      <Button onClick={drawertest}>sqdsqdqs</Button>
      <PagerHeader title="Départements" />

      <Paper className="mainPaper">
        <GeneralTable columns={columns} data={data} />
      </Paper>
    </Stack>
  );
};

export default MyTable;
