"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
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
import GeneralTable from "@/ui/table/mainTable";
import AddIcon from "@mui/icons-material/Add";
import PagerHeader from "@/components/listingPages/pageHeader";
import MenuOption from "@/components/listingPages/menuOptions";
import { title } from "process";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import InfoIcon from "@mui/icons-material/Info";
import { useDrawerAction } from "@/components/drawer/drawer.context";
import { useDialogAction } from "@/components/dialog/dialog.context";
type FakePOSTES = {
  id: number;
  name: string;
  nb_emps: number;
};

const data: FakePOSTES[] = [
  {
    id: 1,
    name: "ENG",

    nb_emps: 54,
  },
];

const departementMenu = [
  {
    title: "Modifier",
    icon: <EditIcon />,
  },
  {
    title: "Supprimer",
    icon: <DeleteIcon />,
  },
];

const columns: ColumnDef<FakePOSTES>[] = [
  {
    header: "Designation",
    accessorKey: "name",
    cell: ({ getValue }) => <strong>{getValue<string>()}</strong>,
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
    openDrawer("ADD_JOB_TITLE", null);
  };

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
          {[1, 2, 3, 4].map((item) => {
            return (
              <Grid item xs={3}>
                <Card>
                  <CardHeader
                    className="reverse"
                    title="Eng"
                    subheader="Designation"
                    action={<MenuOption menulist={departementMenu} />}
                  />
                  <CardContent>
                    <Stack spacing={2}>
                      <Box>
                        <Typography variant="body1">
                          Nombre d'employés
                        </Typography>
                        <AvatarGroup sx={{ justifyContent: "start" }} total={5}>
                          <Avatar alt="name lastname" />
                          <Avatar alt="name lastname" />
                          <Avatar alt="name lastname" />
                          <Avatar alt="name lastname" />
                        </AvatarGroup>
                      </Box>
                      <Box>
                        <Typography variant="body1">
                        Département concerné
                        </Typography>
                        <Stack flexWrap={"wrap"} spacing={1}  direction={"row"}>
                          <Chip
                            label="dep 1"
                            variant="outlined"
                            color="primary"
                          />
                          <Chip
                            label="dep 1"
                            variant="outlined"
                            color="primary"
                          />
                            <Chip
                            label="dep 1"
                            variant="outlined"
                            color="primary"
                          />
                            <Chip
                            label="dep 1"
                            variant="outlined"
                            color="primary"
                          />
                            <Chip
                            label="dep 1"
                            variant="outlined"
                            color="primary"
                          />
                            <Chip
                            label="dep 1"
                            variant="outlined"
                            color="primary"
                          />
                          <Chip
                            label="dep 1"
                            variant="outlined"
                            color="primary"
                          />
                          <Chip
                            label="dep 1"
                            variant="outlined"
                            color="primary"
                          />
                        </Stack>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
};

export default MyTable;
