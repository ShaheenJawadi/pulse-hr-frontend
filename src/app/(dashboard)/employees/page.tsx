"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import GeneralTable from "@/ui/table/mainTable";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PagerHeader from "@/components/listingPages/pageHeader";

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
};

const data: Person[] = [
  { id: 1, firstName: "Shaheen", lastName: "Jawadi", age: 54 },
  { id: 2, firstName: "Chahin", lastName: "Jawadi", age: 54 },
];

const columns: ColumnDef<Person>[] = [
  {
    header: "First Name",
    accessorKey: "firstName",
    cell: ({ getValue }) => <strong>{getValue<string>()}</strong>,
  },
  {
    header: "Last Name",
    accessorKey: "lastName",
    cell: ({ getValue }) => (
      <span style={{ color: "var(--mui-palette-primary-main)" }}>
        {getValue<string>()}
      </span>
    ),
  },
  {
    header: "Age",
    accessorKey: "age",
    cell: ({ getValue }) => <span>{getValue<number>()}</span>,
  },
];

const MyTable = () => {
  return (
    <Stack spacing={3}>
      <PagerHeader title="Employés" />

      <Paper>
        <GeneralTable columns={columns} data={data} />
      </Paper>
    </Stack>
  );
};

export default MyTable;
