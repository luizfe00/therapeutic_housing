import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { GoogleLogin } from '@react-oauth/google';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import Logo from '../../Logo/Logo.component.tsx';
import { AlertState } from '../../../interfaces/Alert';
import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { createUserDTO } from '../../../interfaces/authService.dto';
import { alertInitialState } from '../../../constants/alert';
import { TextInput } from '../../shared';
import {
  ContentContainer,
  FieldsContainer,
  LoginFormContainer,
  LoginFormWrapper,
  NewAccountContainer,
} from './LoginForm.styles';

export interface LoginFormProps {
  onChangeAlert: (newAlertState: AlertState) => void;
  alertState: AlertState;
  onSubmit: () => void;
  register: UseFormRegister<createUserDTO>;
  errors: FieldErrors<createUserDTO>;
  loading?: boolean;
}

export const LoginForm = ({
  alertState,
  errors,
  onChangeAlert,
  onSubmit,
  register,
  loading,
}: LoginFormProps) => {
  const onCloseAlert = () => onChangeAlert(alertInitialState);

  return (
    <LoginFormContainer className="p-16 w-1/2">
      <Snackbar
        open={alertState.open}
        autoHideDuration={3000}
        onClose={onCloseAlert}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={onCloseAlert}>
          {alertState?.message}
        </Alert>
      </Snackbar>
      <LoginFormWrapper onSubmit={onSubmit}>
        <Logo />
        <ContentContainer className="mt-24">
          <Typography variant="h3">Log in</Typography>
          <Typography variant="subtitle2" className="text-gray-500" mt={1}>
            Bem vindo! Entre para gerenciar seus dados
          </Typography>
        </ContentContainer>
        <ContentContainer className="mt-12">
          <FieldsContainer>
            <TextInput
              type="email"
              size="small"
              id="login-email"
              label="E-mail"
              variant="outlined"
              disabled={loading}
              {...register('email', {
                required: {
                  value: true,
                  message: 'É preciso informar um e-mail',
                },
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'É preciso informar um e-mail válido',
                },
              })}
              error={!!errors.email}
              helperText={errors.email?.message}
            />
            <TextInput
              type="password"
              size="small"
              id="login-password"
              label="Senha"
              variant="outlined"
              disabled={loading}
              {...register('password', {
                required: {
                  value: true,
                  message: 'É preciso informar uma senha',
                },
                minLength: {
                  value: 8,
                  message: 'A senha precisa ter no mínimo 8 dígitos',
                },
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
            />
            <Link href="#" variant="body2">
              Esqueci minha senha
            </Link>
            <Button type="submit" variant="contained" disabled={loading}>
              Entrar
            </Button>
            <GoogleLogin onSuccess={() => console.log('success')} />
          </FieldsContainer>
        </ContentContainer>
        <NewAccountContainer>
          <Typography variant="subtitle2" className="text-gray-500">
            Ainda não possui uma conta?
            <Link href="#" variant="subtitle2" ml={1}>
              Crie aqui
            </Link>
          </Typography>
        </NewAccountContainer>
      </LoginFormWrapper>
    </LoginFormContainer>
  );
};
