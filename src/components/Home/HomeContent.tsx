import ResidentList from '../ResidentList/ResidentList';
import CareTakerList from '../CareTakerList/CareTakerList';
import ContentContainer from '../Container/ContentContainer';
import { Grid } from '@mui/material';

const HomeContent = () => {
  return (
    <ContentContainer>
      <Grid container spacing={2}>
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

export default HomeContent;
