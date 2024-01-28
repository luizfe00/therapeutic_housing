import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

export const LoginFormContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  padding: '8rem 2rem',
}));

export const LoginFormWrapper = styled('form')(() => ({
  width: '50%',
}));

export const ContentContainer = styled(Box)<BoxProps>(() => ({
  marginTop: '2rem',
}));

export const FieldsContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
}));

export const NewAccountContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1rem',
}));
