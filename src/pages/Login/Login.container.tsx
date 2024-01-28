import { useNavigate } from 'react-router-dom';
import LoginComponent from './Login.component';
import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { createUserDTO } from '../../interfaces/authService.dto';
import { useMutation } from '@tanstack/react-query';
import { authUser } from '../../service/authService';
import { AlertState } from '../../interfaces/Alert';
import { alertInitialState } from '../../constants/alert';

const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthContext();

  const [alert, setAlert] = useState<AlertState>(alertInitialState);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<createUserDTO>();

  const loginRequest = useMutation({
    mutationFn: authUser,
    onError: () =>
      setAlert({
        message: 'Ocorreu um erro, tente novamente mais tarde!',
        open: true,
        severity: 'error',
      }),
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
    <LoginComponent
      alertState={alert}
      errors={errors}
      onChangeAlert={(newValue) => setAlert(newValue)}
      onSubmit={handleSubmit(onSubmit)}
      register={register}
      loading={loginRequest?.isLoading}
    />
  );
};

export default Login;
