import React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Banner from "../../../images/Traningmethodology.png";

const Embeddedcon1 = () => {
  return (
    <>
    <Typography variant="h3" align="center">
          Our Training Methodology
        </Typography>
    <Grid container spacing={2} sx={{marginTop:'2rem'}}>
        
      <Grid item xs={12} sm={6}>
        <img src={Banner} alt="Training" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid sx={{position:'relative',top:'3rem'}}>
        <Typography variant="h6" align="center">
          Check out our innovative key features in training methodologies. Our
          flexible training mechanisms incorporate all techniques right from
          knowledge assessment till setting placement records.
        </Typography>
        
        <Typography variant="body1">
          Learning tools will be provided along with the most up-to-date lab facilities, curriculum, and course materials.
          You will be able to connect with the trainers at any time.
        </Typography>
        </Grid>
      </Grid>
    </Grid>
    </>
  );
};

export default Embeddedcon1;
