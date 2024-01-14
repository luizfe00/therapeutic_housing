import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import { Typography } from '@mui/material';

type LogoProps = {
  fontSize?: 'large' | 'medium' | 'small';
};

const Logo = ({ fontSize = 'large' }: LogoProps) => {
  const getIconSize = () => {
    if (fontSize === 'large') return 'h-12 w-12';
    if (fontSize === 'medium') return 'h-10 w-10';
    if (fontSize === 'small') return 'h-8 w-8';
    return '';
  };

  const getTextVariant = () => {
    if (fontSize === 'large') return 'h6';
    if (fontSize === 'medium') return 'body1';
    if (fontSize === 'small') return 'caption';
    return;
  };

  return (
    <div className="flex">
      <div
        className={`rounded-lg ${getIconSize()} bg-primary-blue flex justify-center items-center shadow-md`}
      >
        <MonitorHeartOutlinedIcon
          fontSize={fontSize}
          sx={{ color: '#F8F9FA' }}
        />
      </div>
      <Typography
        variant={getTextVariant()}
        display="flex"
        alignItems="center"
        ml={1}
      >
        Residencias Terapeuticas
      </Typography>
    </div>
  );
};

export default Logo;
