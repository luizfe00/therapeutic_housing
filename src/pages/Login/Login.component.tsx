import Grid from '@mui/material/Grid';
import {
  LoginSideSection,
  LoginForm,
  LoginFormProps,
} from '../../components/Login';
import { LoginBannerContainer } from './Login.styles';

const LoginComponent = (props: LoginFormProps) => {
  return (
    <LoginBannerContainer container>
      <Grid item xs={8}>
        <LoginForm {...props} />
      </Grid>
      <Grid item xs={4}>
        <LoginSideSection />
      </Grid>
    </LoginBannerContainer>
  );
};

export default LoginComponent;
