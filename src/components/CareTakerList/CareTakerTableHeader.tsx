import React from 'react';
import { HeadCell, TableHeadProps } from '../ResidentList/ResidentTableHead';
import { OrderBy } from '../ResidentList/ResidentList';
import Checkbox from '@mui/material/Checkbox';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';

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
];

const CareTakerTableHeader: React.FC<TableHeadProps> = ({
  numSelected,
  onRequestSort,
  onSelectAllClick,
  order,
  orderBy,
  rowCount,
}) => {
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

export default CareTakerTableHeader;
