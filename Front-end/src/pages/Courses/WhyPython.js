import React from 'react';
import Layout from '../../components/Layout/Layout';
import { Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../images/pyhtonprogram.png";
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

const WhyPython = () => {
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
            <Typography variant="h4"style={{color:'#66023b', fontWeight:'500'}} align="center" gutterBottom>
            WHY CORE JAVA DEVELOPMENT COURSE ?
            </Typography>
            <Typography variant="body1">
           <b> Get Hands-on knowledge with Real-Time projects from our dedicated Python Course in Coimbatore</b><br/>
           Python has a reputation for being a beginner-friendly language, having surpassed Java as the most frequently used beginning language because it handles most of the complexity for the user, enabling novices to concentrate on thoroughly learning programming ideas rather than minute details. Because of its high-level, built-in data structures, dynamic typing, and dynamic binding, Python is famous for server-side web development, software development, mathematics, and system scripting.

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

export default WhyPython;
