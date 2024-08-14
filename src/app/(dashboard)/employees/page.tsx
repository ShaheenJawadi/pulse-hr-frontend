"use client"
import React, { useState } from 'react';
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  flexRender,
  SortingState,
  getSortedRowModel,
} from '@tanstack/react-table';
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper, 
} from '@mui/material';

type Person = {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  
};
 
const data: Person[] = [
  { id: 1, firstName: 'Shaheen', lastName: 'Jawadi', age: 54 }, 
];

const columns: ColumnDef<Person>[] = [
  {
    header: 'First Name',
    accessorKey: 'firstName',
    cell: ({ getValue }) => <strong>{getValue<string>()}</strong>,
  },
  {
    header: 'Last Name',
    accessorKey: 'lastName',
    cell: ({ getValue }) => <span style={{ color: 'var(--mui-palette-primary-main)' }}>{getValue<string>()}</span>,
  },
  {
    header: 'Age',
    accessorKey: 'age',
    cell: ({ getValue }) => (
      <span  >
        {getValue<number>()}
      </span>
    ),
  },
];

const MyTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    state: { sorting },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          {table.getHeaderGroups().map(headerGroup => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <TableCell key={header.id}>
                  <div
                    {...{
                      onClick: header.column.getToggleSortingHandler(),
                      style: { cursor: 'pointer' },
                    }}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() ? (
                      header.column.getIsSorted() === 'desc' ? ' 🔽' : ' 🔼'
                    ) : null}
                  </div>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableHead>
        <TableBody>
          {table.getRowModel().rows.map(row => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map(cell => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MyTable;
