import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Banner from "../../images/Intershipprocess.png";
const CenteredContent = styled('div')({
  textAlign: 'center',
});

const IntershipProcess = () => {
  return (
    <Container>
      <Typography variant="h4" component="h4" style={{fontWeight:'600',color:'#4f0242',textAlign:'center'}}>
        Our Internship Training Process
      </Typography><br/>
      <CenteredContent>
        <Typography variant="h6" component="h6">
          Samrtcliff Academy follows a structured process of executing the Internship Training.
          Build a promising career path by exploring our NSCHOOL Academy IT Internship programs in Coimbatore.
        </Typography>
        <Grid container justifyContent="center">
          <Grid item>
            <img src={Banner} alt="Internship Training" />
          </Grid>
        </Grid>
      </CenteredContent>
    </Container>
  );
};

export default IntershipProcess;
