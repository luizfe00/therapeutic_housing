import Aside from '../../../assets/aside.svg';
import { AsideContainer, AsideImage } from './LoginSideSection.style';

const LoginSideSection = () => {
  return (
    <AsideContainer>
      <AsideImage src={Aside} />
    </AsideContainer>
  );
};

export default LoginSideSection;
