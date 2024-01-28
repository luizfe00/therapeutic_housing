import { Grid } from '@mui/material';
import ContentContainer from '../../components/Container/ContentContainer';
import ResidentList from '../../components/ResidentList/ResidentList';
import CareTakerList from '../../components/CareTakerList/CareTakerList';

const HomeComponent = () => {
  return (
    <ContentContainer>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <ResidentList />
        </Grid>
        <Grid item xs={12}>
          <CareTakerList />
        </Grid>
      </Grid>
    </ContentContainer>
  );
};

export default HomeComponent;
