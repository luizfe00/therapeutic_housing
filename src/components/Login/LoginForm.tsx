import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import { GoogleLogin } from '@react-oauth/google';
import { useMutation } from '@tanstack/react-query';
import { authUser } from '../../service/authService';
import { useForm } from 'react-hook-form';
import { createUserDTO } from '../../interfaces/authService.dto';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';

export const LoginForm = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();

  const [alert, setAlert] = useState<string>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserDTO>();
  const loginRequest = useMutation({
    mutationFn: authUser,
    onError: () => setAlert('Ocorreu um erro, tente novamente mais tarde!'),
  });

  const onSubmit = async (data: createUserDTO) => {
    const response = await loginRequest.mutateAsync(data);

    if (response.status === 200) {
      localStorage.setItem('H_token', response.data.token);
      setAuth(response.data.token);
      navigate('/home');
    }
  };

  return (
    <div className="p-16 w-1/2">
      <Snackbar
        open={!!alert}
        autoHideDuration={3000}
        onClose={() => setAlert('')}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity="error" onClose={() => setAlert('')}>
          {alert}
        </Alert>
      </Snackbar>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex">
          <div className="rounded-lg h-12 w-12 bg-primary-blue flex justify-center items-center shadow-md">
            <MonitorHeartOutlinedIcon
              fontSize="large"
              sx={{ color: '#F8F9FA' }}
            />
          </div>
          <Typography variant="h6" display="flex" alignItems="center" ml={1}>
            Residencias Terapeuticas
          </Typography>
        </div>
        <div className="mt-24">
          <Typography variant="h3">Log in</Typography>
          <Typography variant="subtitle2" className="text-gray-500" mt={1}>
            Bem vindo! Entre para gerenciar seus dados
          </Typography>
        </div>
        <div className="mt-12">
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <TextField
              type="email"
              size="small"
              id="login-email"
              label="E-mail"
              variant="outlined"
              disabled={loginRequest.isLoading}
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
              sx={{
                minHeight: '4rem',
              }}
            />
            <TextField
              type="password"
              size="small"
              id="login-password"
              label="Senha"
              variant="outlined"
              disabled={loginRequest.isLoading}
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
              sx={{
                minHeight: '4rem',
              }}
            />
            <Link href="#" variant="body2">
              Esqueci minha senha
            </Link>
            <Button
              type="submit"
              variant="contained"
              disabled={loginRequest.isLoading}
            >
              Entrar
            </Button>
            <GoogleLogin onSuccess={() => console.log('success')} />
          </Box>
        </div>
        <div className="flex justify-center mt-8">
          <Typography variant="subtitle2" className="text-gray-500">
            Ainda não possui uma conta?
            <Link href="#" variant="subtitle2" ml={1}>
              Crie aqui
            </Link>
          </Typography>
        </div>
      </form>
    </div>
  );
};
