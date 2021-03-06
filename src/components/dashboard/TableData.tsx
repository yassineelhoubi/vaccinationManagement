

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useState } from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch } from 'react-redux';
import { ColumnTable, DataTable, PropsTable } from '../../interfaces';
import { Box } from '@mui/material';



const TableData: React.FC<PropsTable> = ({ data, columns: headers }) => {
  let dispatch = useDispatch()
  // columns => table headers
  const columns: readonly ColumnTable[] = headers.map(e => e);
  // rows => data
  let rows: DataTable[] = data.map((row) => row)
  // pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const openDeleteModal = (id: string) => {
    console.log(id);

  }

  const handelAlertUpdateDialog = (data: DataTable) => {
    console.log(data);

  }

  return (<>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row._id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} sx={{ width: `${headers.length / 100}` }} >
                          {column.id == "actions" ?
                            <Box>
                              <Button onClick={() => openDeleteModal(row._id)} variant="outlined" >
                                <DeleteIcon />
                              </Button>
                              <Button onClick={() => handelAlertUpdateDialog(row)} variant="outlined" >
                                <EditIcon />
                              </Button>
                            </Box> : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper >
  </>
  );
};

export { TableData };