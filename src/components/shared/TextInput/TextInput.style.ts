import Box, { BoxProps } from '@mui/material/Box';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

export const TextInputContainer = styled(Box)<BoxProps>(() => ({
  minHeight: '4rem',
}));

export const TextInputComponent = styled(TextField)<TextFieldProps>(() => ({
  borderRadius: '0.5rem',
  width: '100%',
}));
