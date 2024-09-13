import React from 'react';

import { Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../images/whyjava.png";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import JavaTrainingMethodlogy from './JavaTrainingMethodlogy';


const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  animation: 'moveUpDown 2s infinite ease-in-out',
  transform: 'translateY(0)',
  '@keyframes moveUpDown': {
    '0%': {
      transform: 'translateY(0)',
    },
    '50%': {
      transform: 'translateY(-1rem)',
    },
    '100%': {
      transform: 'translateY(0)',
    },
  },
});

const Whyjava = () => {
  return (
    <>
    
      {/* <Typography variant='h4'sx={{fontWeight:'600',textAlign:'center',color:'#66023b',position:'relative',top:'2rem'}}>Java full stack</Typography> */}
          <StyledContainer id="scrollToWhyJava" sx={{position:'relative',marginTop:'5rem'}}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <StyledImage
              src={Banner}
              alt="About Image"
              style={{ animationDelay: '1s', marginBottom: '2rem' }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4"style={{color:'#66023b',fontWeight:'600'}} align="center" gutterBottom>
            WHY CORE JAVA DEVELOPMENT COURSE ?
            </Typography>
            <Typography variant="body1">
            <b>Get Hands-on knowledge with Real-Time projects from our dedicated Core Java training courses.</b> This Core Java Development Certification course is designed to give you an essence of front-end, middleware, and back-end web developer technologies. You will learn to build an end-to-end application, test and deploy code, store data, and much more
            </Typography>
            <br />
            <Link to="/menu">
              <Button className="Enquirybutton" variant="contained" style={{ backgroundColor: "#66023b", color: 'white' }}>
                Apply Now
              </Button>
            </Link> 
          </Grid>
        </Grid>
      </StyledContainer>
      
      
      </>

  );
};

export default Whyjava;
