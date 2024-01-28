import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import Logo from '../Logo/Logo.component.tsx';

const featureOptions = [
  {
    label: 'Gastos Mensais',
    icon: <ShoppingCartIcon />,
  },
  {
    label: 'Benefícios',
    icon: <AccessibilityIcon />,
  },
];

const CustomDrawer = () => {
  return (
    <Box
      boxShadow="0px 0px 8px rgba(0, 0, 0, .2)"
      sx={{ maxWidth: 250, backgroundColor: '#fff', height: '100%' }}
    >
      <List>
        <ListItem key="logo" sx={{ marginBottom: '1rem' }}>
          <Logo fontSize="small" />
        </ListItem>
        {featureOptions.map((option) => (
          <ListItem key={option.label} disablePadding>
            <ListItemButton>
              <ListItemIcon>{option.icon}</ListItemIcon>
              <ListItemText primary={option.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CustomDrawer;
