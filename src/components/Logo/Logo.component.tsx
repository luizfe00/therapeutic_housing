import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import { Typography } from '@mui/material';
import { LogoContainer, LogoRoundedWrapper } from './Logo.styles';

type LogoProps = {
  fontSize?: 'large' | 'medium' | 'small';
};

const Logo = ({ fontSize = 'large' }: LogoProps) => {
  const getIconSize = () => {
    let height = '1rem';
    let width = '1rem';
    if (fontSize === 'large') {
      height = '4rem';
      width = '4rem';
    }
    if (fontSize === 'medium') {
      height = '2rem';
      width = '2rem';
    }
    return { height, width };
  };

  const getTextVariant = () => {
    if (fontSize === 'large') return 'h6';
    if (fontSize === 'medium') return 'body1';
    if (fontSize === 'small') return 'caption';
    return;
  };

  return (
    <LogoContainer className="flex">
      <LogoRoundedWrapper
        iconSizeHeight={getIconSize().height}
        iconSizeWidth={getIconSize().width}
      >
        <MonitorHeartOutlinedIcon
          fontSize={fontSize}
          sx={{ color: '#F8F9FA' }}
        />
      </LogoRoundedWrapper>
      <Typography
        variant={getTextVariant()}
        display="flex"
        alignItems="center"
        ml={1}
      >
        Residencias Terapeuticas
      </Typography>
    </LogoContainer>
  );
};

export default Logo;
