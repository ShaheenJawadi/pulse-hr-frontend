 import { Stack } from '@mui/material'
 
import type { useReactTable } from '@tanstack/react-table'
import Pagination from '@mui/material/Pagination'
import Typography from '@mui/material/Typography'

const TablePaginationComponent = ({ table }: { table: ReturnType<typeof useReactTable> }) => {
  return (
    <Stack   direction={"row"} justifyContent={"space-between"}>
      <Typography color='text.disabled'>
        {`Affichage de l'élément ${
          table.getFilteredRowModel().rows.length === 0
            ? 0
            : table.getState().pagination.pageIndex * table.getState().pagination.pageSize + 1
        }
        à ${Math.min(
          (table.getState().pagination.pageIndex + 1) * table.getState().pagination.pageSize,
          table.getFilteredRowModel().rows.length
        )} sur  ${table.getFilteredRowModel().rows.length} éléments`}
      </Typography>
      <Pagination
      variant='outlined'
        shape='rounded'
        color='primary' 
        count={Math.ceil(table.getFilteredRowModel().rows.length / table.getState().pagination.pageSize)}
        page={table.getState().pagination.pageIndex + 1}
        onChange={(_, page) => {
          table.setPageIndex(page - 1)
        }}
        showFirstButton
        showLastButton
      />
    </Stack>
  )
}

export default TablePaginationComponent
