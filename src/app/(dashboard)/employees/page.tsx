"use client";
import React, { useState } from "react";
import { ColumnDef } from "@tanstack/react-table";
import { 
  Button, 
  Paper,
  Stack, 
} from "@mui/material";
import GeneralTable from "@/ui/table/mainTable";  
import PagerHeader from "@/components/listingPages/pageHeader";

import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";
import { ROUTING } from "@/utils/routes";

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

      <Paper className="mainPaper">
        <GeneralTable utils={<TableUtils/>} columns={columns} data={data} />
      </Paper>
    </Stack>
  );
};


const TableUtils = () => {
 
  const router = useRouter();

  const addBtn = () => {

    router.push(ROUTING.EMPLOYEE.ADD);
  }
  return (
    <Stack 
      spacing={2}
      direction={"row"}
      justifyContent={"flex-end"}
    >
      <Button
        startIcon={<AddIcon />}
        size="large"
        variant="contained"
        onClick={addBtn}
      >
        Ajouter un employée
      </Button>
    </Stack>
  );
};
export default MyTable;
