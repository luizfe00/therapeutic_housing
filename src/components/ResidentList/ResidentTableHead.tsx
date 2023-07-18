import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import React from 'react';
import { Order, OrderBy } from './ResidentList';
import TableSortLabel from '@mui/material/TableSortLabel';

interface HeadCell {
  disablePadding: boolean;
  id: string;
  label: string;
  numeric: boolean;
}

interface ResidentTableHeadProps {
  numSelected: number;
  onRequestSort: (event: React.MouseEvent<unknown>, property: OrderBy) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
  order: Order;
  orderBy: string;
  rowCount: number;
}

const ResidentTableHead: React.FC<ResidentTableHeadProps> = ({
  numSelected,
  onRequestSort,
  onSelectAllClick,
  order,
  orderBy,
  rowCount,
}) => {
  const headCells: readonly HeadCell[] = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Nome',
    },
    {
      id: 'document',
      numeric: false,
      disablePadding: true,
      label: 'Documento',
    },
    {
      id: 'birthDate',
      numeric: false,
      disablePadding: true,
      label: 'Data de Nascimento',
    },
    {
      id: 'shopping',
      numeric: true,
      disablePadding: true,
      label: 'Compras/mês',
    },
    {
      id: 'income',
      numeric: true,
      disablePadding: false,
      label: 'Saldo/mês',
    },
  ];

  const createSortHandler =
    (property: OrderBy) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'Selecionar Todos',
            }}
          />
        </TableCell>
        {headCells.map((cell) => (
          <TableCell
            key={cell.id}
            align={cell.numeric ? 'right' : 'left'}
            padding={cell.disablePadding ? 'none' : 'normal'}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              direction={orderBy === cell.id ? order : 'asc'}
              onClick={createSortHandler(cell.id as OrderBy)}
            ></TableSortLabel>
            {cell.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default ResidentTableHead;
