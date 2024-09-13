import React from 'react';
import { Container, Typography, Grid } from '@mui/material';
import { styled } from '@mui/system';
import Banner from "../../images/contactimg.webp";
const CenteredContent = styled('div')({
  textAlign: 'center',
});

const Contactcontent = () => {
  return (
    <Container style={{marginTop:'4rem',background:'#66023b'}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <CenteredContent>
            <Typography variant="h4" style={{color:'white',fontWeight:'700',position:'relative',right:'12rem'}} component="h4">
              Contact us
            </Typography><br/><br/>
            
            <Typography variant="p" style={{color:'white'}} component="p">
              We’d love to hear from you! Send us a question or comment below and we’ll get in touch with you shortly!
            </Typography>
          </CenteredContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={Banner} alt="Contact" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contactcontent;
