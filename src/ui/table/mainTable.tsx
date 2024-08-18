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
} from "@mui/material";
import TablePaginationComponent from "./pagination";

interface GeneralTableProps {
  columns: ColumnDef<any, any>[];
  data: any[];
}

const GeneralTable = ({ columns, data }: GeneralTableProps) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
  
      <Stack spacing={3}>
        <Box alignContent={"flex-end"} display={"flex"}>
          <TablePagination
            component="div"
            count={data.length}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            labelRowsPerPage={"Lignes par page"}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Box>
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
          rowsPerPage={rowsPerPage}
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
