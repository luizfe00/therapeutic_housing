import React, { useMemo, useState } from 'react';
import { Order, OrderBy } from '../ResidentList/ResidentList';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { MAPPED_DATES } from '../../util/DateUtil';
import { Delete, Edit, Create } from '@mui/icons-material';
import { stableSort, getComparator } from '../../util/TableUtil';
import CareTakerTableHeader from './CareTakerTableHeader';
import { useAxiosPrivate } from '../../hooks/useAxiosPrivate';

const CareTakerList = () => {
  const axios = useAxiosPrivate();

  const [order, setOrder] = useState<Order>('asc');
  const [orderBy, setorderBy] = useState<OrderBy>('');
  const [selected, setSelected] = useState<readonly string[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows, setRows] = useState<any[]>([]);
  const [queryMonth, setQueryMonth] = useState<number>(new Date().getMonth());
  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: OrderBy,
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setorderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-return
      const newSelected = rows.map((row) => row.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event: React.MouseEvent, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(-1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  const handleChangePage = (_event: unknown, newPage: number) =>
    setPage(newPage);
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const isSelected = (name: string) => selected.indexOf(name) !== -1;
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  const visibleRows = useMemo(
    () =>
      stableSort(rows, getComparator(order, orderBy)).slice(
        page * rowsPerPage,
        page * rowsPerPage + rowsPerPage,
      ),
    [order, orderBy, page, rowsPerPage, rows],
  );

  const buildMonthList = () => {
    const currentMonth = new Date().getMonth();
    const monthsUpToNow = MAPPED_DATES.slice(0, currentMonth + 1);
    return monthsUpToNow.map((month, index) => (
      <MenuItem value={index}>{month}</MenuItem>
    ));
  };

  const handleQueryMonthChange = (event: SelectChangeEvent<number>) => {
    const value = event.target.value as number;
    setQueryMonth(value);
  };

  return (
    <div className="w-full">
      <div className="flex justify-between pb-2 align-baseline">
        <Typography variant="h6">Cuidadores</Typography>
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="query-month-picker">Mês</InputLabel>
          <Select
            labelId="query-month-picker"
            id="month-picker"
            value={queryMonth}
            label="month"
            onChange={handleQueryMonthChange}
          >
            {buildMonthList()}
          </Select>
        </FormControl>
      </div>
      <Paper className="w-full mb-2">
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="Cuidadores"
            size="medium"
          >
            <CareTakerTableHeader
              numSelected={selected.length}
              onRequestSort={handleRequestSort}
              onSelectAllClick={handleSelectAllClick}
              order={order}
              orderBy={orderBy}
              rowCount={rows.length}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = isSelected(row.name as string);
                const labelId = `caretaker-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.name as string)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          'aria-labelledby': labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell
                      component="th"
                      id={labelId}
                      scope="row"
                      padding="none"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell>{row.document}</TableCell>
                    <TableCell>{row.birthDate}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
      <div className="w-full flex justify-end gap-4">
        <Button variant="outlined" color="error" startIcon={<Delete />}>
          Deletar
        </Button>
        <Button variant="contained" color="success" startIcon={<Edit />}>
          Editar
        </Button>
        <Button variant="contained" color="primary" startIcon={<Create />}>
          Criar
        </Button>
      </div>
    </div>
  );
};

export default CareTakerList;
