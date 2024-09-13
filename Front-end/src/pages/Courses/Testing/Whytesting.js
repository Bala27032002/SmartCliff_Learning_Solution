import React from 'react';

import { Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../../images/testingpic2.png";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



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

const Whytesting = () => {
  return (
    <>
      {/* <Typography variant='h4'sx={{fontWeight:'600',textAlign:'center',color:'#66023b',position:'relative',top:'2rem'}}>Java full stack</Typography> */}
          <StyledContainer sx={{position:'relative',marginTop:'5rem'}}>
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
            WHY SOFTWARE TESTING COURSE IN COIMBATORE ?
            </Typography>
            <Typography variant="body1">
            <b>This Software testing course in Coimbatore is designed to give you an essence of Selenium and Automation testing technology. You will learn to test and deploy code in our specialized Software Testing training in Coimbatore at SmartCliff Academy</b><br/><br/>
            The delivery of an optimal quality software product that has unique and innovative features has always been the priority of the software industry worldwide. However, without evaluating software components under various expected and unexpected conditions, the team cannot guarantee these aspects.<b> Software testing </b>is a crucial component of software development because it improves consistency and performance. The main benefit of testing is the identification and subsequent removal of the errors. However, testing also helps developers and testers to compare actual and expected results in order to improve quality
            </Typography>
            <br />
             <Link to="/menu">
              <Button className="Enquirybutton" variant="contained" style={{ backgroundColor: "#4f0242", color: 'white' }}>
                Apply Now
              </Button>
            </Link> 
          </Grid>
        </Grid>
      </StyledContainer>
      
      
      
      </>

  );
};

export default Whytesting;
