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

interface GeneralTableProps {
  columns: ColumnDef<any, any>[];
  data: any[]; 
  utils?: React.ReactNode;
}

const GeneralTable = ({ columns, data ,utils }: GeneralTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [rowsPerPage, setRowsPerPage] = React.useState<string>("20");

  const handleChangeRowsPerPage = (event: SelectChangeEvent) => {
    setRowsPerPage(event.target.value as string);
  };

  return (
    <Stack spacing={3}>
      <Stack paddingX={4} direction={"row"} justifyContent={"space-between"}>
        <FormControl sx={{ minWidth: 120 }}>
          <InputLabel>Ligne par page</InputLabel>
          <Select
            value={rowsPerPage}
            label="Ligne par page"
            size="small"
            onChange={handleChangeRowsPerPage}
          >
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>

            <MenuItem value={50}>50</MenuItem>
            <MenuItem value={100}>100</MenuItem>
          </Select>
        </FormControl>
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
