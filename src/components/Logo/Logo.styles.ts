import Box, { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';

interface LogoRoundedWrapper extends BoxProps {
  iconSizeHeight: string;
  iconSizeWidth: string;
}

export const LogoContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
}));

export const LogoRoundedWrapper = styled(Box)<LogoRoundedWrapper>(
  ({ iconSizeHeight, iconSizeWidth, theme }) => ({
    height: iconSizeHeight,
    width: iconSizeWidth,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.light,
  }),
);
