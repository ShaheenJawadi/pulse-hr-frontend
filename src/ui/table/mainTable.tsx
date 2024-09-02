import React from "react";
import {
  useReactTable,
  ColumnDef,
  flexRender,
  getCoreRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  CircularProgress,
  TablePagination,
  Pagination,
  Card,
  Divider,
  Box,
  Stack,
  Select,
  MenuItem,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from "@mui/material";
import TablePaginationComponent from "./pagination";
import { SelectField } from "@/components/utils/SelectField";
import { SelectDataTypes } from "@/types/structureTypes";

interface GeneralTableProps {
  columns: ColumnDef<any, any>[];
  data: any[];
  utils?: React.ReactNode;
}

const GeneralTable = ({ columns, data, utils }: GeneralTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [rowsPerPage, setRowsPerPage] = React.useState<string>("20");

  const handleChangeRowsPerPage = (value: any) => {
    setRowsPerPage(value as string);
  };

  const perPageList: SelectDataTypes[] = [
    {
      labelText: 20,
      value: 20,
    },
    {
      labelText: 30,
      value: 30,
    },
    {
      labelText: 50,
      value: 50,
    },
    {
      labelText: 100,
      value: 100,
    },
  ];

  return (
    <Stack spacing={3}>
      <Stack paddingX={4} direction={"row"} justifyContent={"space-between"}>
        <Box sx={{ minWidth: 120 }}>
      {/*     <SelectField
            dataValue={20}
            size="small"
            label={"Ligne par page"}
            getNewValue={(v) => handleChangeRowsPerPage(v)}
            selectData={perPageList}
          /> */}
        </Box>

        <Box> {utils} </Box>
      </Stack>

      <Box>
        <Divider />

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableCell key={header.id}>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableHead>
            <TableBody>
              {table.getRowModel().rows.map((row) => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box paddingX={5}>
        <TablePagination
          component={() => <TablePaginationComponent table={table} />}
          count={table.getFilteredRowModel().rows.length}
          rowsPerPage={parseInt(rowsPerPage, 20)}
          page={table.getState().pagination.pageIndex}
          onPageChange={(_, page) => {
            table.setPageIndex(page);
          }}
        />
      </Box>
    </Stack>
  );
};

export default GeneralTable;
