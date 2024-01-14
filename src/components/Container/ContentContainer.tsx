import { Box, Grid } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import CustomDrawer from '../Drawer/CustomDrawer';

const ContentContainer = ({ children }: PropsWithChildren) => {
  return (
    <Grid container spacing={2} sx={{ height: '100%' }}>
      <Grid item xs={3}>
        <CustomDrawer />
      </Grid>
      <Grid item xs={9}>
        <Box p={4}>{children}</Box>
      </Grid>
    </Grid>
  );
};

export default ContentContainer;
