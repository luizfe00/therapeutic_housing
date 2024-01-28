import { styled } from '@mui/material/styles';

export const AsideContainer = styled('aside')(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  height: '100%',
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const AsideImage = styled('img')(() => ({
  opacity: 0.8,
  padding: '2rem',
  width: '100%',
}));
