"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { Box } from "@mui/material";
import GeneralTable from "@/ui/table/mainTable";

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
    <Box>
      <GeneralTable columns={columns} data={data} />
    </Box>
  );
};

export default MyTable;
