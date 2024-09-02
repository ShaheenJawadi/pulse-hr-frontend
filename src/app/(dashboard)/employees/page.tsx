"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid, 
  Stack,
  Typography,
} from "@mui/material"; 
import PagerHeader from "@/components/listingPages/pageHeader";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { ROUTING } from "@/utils/routes";
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MenuOption from "@/components/listingPages/menuOptions";
import { ListingMenuItemType } from "@/types/structureTypes";

const MyTable = () => {
  const router = useRouter();

  const addBtn = () => {
    router.push(ROUTING.EMPLOYEE.ADD);
  };
  return (
    <Stack spacing={3}>
      <PagerHeader title="Employés" />

      <Stack spacing={2} direction={"row"} justifyContent={"flex-end"}>
        <Button
          startIcon={<AddIcon />}
          size="large"
          variant="contained"
          onClick={addBtn}
        >
          Ajouter un employée
        </Button>
      </Stack>

      <Grid container>
        <SingleEmployeeCard />
      </Grid>
    </Stack>
  );
};

const menu: ListingMenuItemType[] = [
  {
    title: "Aperçu",
    icon: <RemoveRedEyeIcon />,
  },
  {
    title: "Profile",
    icon: <AccountBoxIcon />,
    link: ROUTING.RECRUTEMENT.APPLICATIONS("1"),
  } 
];

const SingleEmployeeCard = () => {
  return (
    <Grid item xs={4}>
      <Card>
        <CardContent>
          <Stack spacing={3}>
            <Stack direction={"row"} justifyContent={"space-between"}>
                   <Stack spacing={4} alignItems={"center"} direction={"row"}   >
              <Box>
                <Avatar
                  sx={{ width: 80, height: 80 }}
                  variant="rounded"
                  src={"/utils/goat.jpg"}
                />
              </Box>

              <Box>
                <Typography variant="h5">Shaheen Jawadi</Typography>
                <Typography fontWeight={700} variant="body2">
                  sqdqs@sqd.sqd
                </Typography>
              </Box>
            </Stack>
            <MenuOption menulist={menu} />
            </Stack>
       
            <Divider sx={{ width: "100%" }} />
            <Stack direction={"row"} spacing={4}>
              <Typography variant="body2">Departement:</Typography>
              <Chip label="Employé" color="primary" size="medium" />
            </Stack>
            <Stack alignItems={"center"} spacing={1}>
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
            </Stack>

            <Stack alignSelf={"center"} direction={"row"} gap={4}>
              <Chip
                label="En congé"
                color="info"
                size="medium"
                variant="lightone"
              />
              <Chip
                label="Absent"
                color="error"
                size="medium"
                variant="lightone"
              />

              <Chip
                label="Présent"
                color="primary"
                size="medium"
                variant="lightone"
              />
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default MyTable;
