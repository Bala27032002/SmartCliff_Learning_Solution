import React from 'react';

import { Typography, Grid, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../../../images/qrcode.png";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
}));

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
//   animation: 'moveUpDown 2s infinite ease-in-out',
//   transform: 'translateY(0)',
//   '@keyframes moveUpDown': {
//     '0%': {
//       transform: 'translateY(0)',
//     },
//     '50%': {
//       transform: 'translateY(-1rem)',
//     },
//     '100%': {
//       transform: 'translateY(0)',
//     },
//   },
});

const QRcode = () => {
  return (
    
   <>
    
          <StyledContainer sx={{position:'relative',marginTop:'5rem'}}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <StyledImage
              src={Banner}
              alt="About Image"
              style={{ width:'20rem',height:'20rem',marginLeft:'5rem'}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h4" align="center" gutterBottom style={{fontWeight:'700',color:'#66023b'}}>
              TO REGISTER
              {/* Smartcliff holds the Highly Professional Corporate Training programs on IT Software, Project Management */}
            </Typography>
            
            <br />
            <Link to="/MainRegister">
            <Button className="Enquirybutton" variant="contained" style={{ backgroundColor: "#66023b",fontSize:'15px' ,color:'white',marginLeft:'10rem'}}>
               Click to Apply <ArrowRightAltIcon/>
              </Button><span style={{fontSize:'1.4rem',marginLeft:'0.6rem'}}>/ScanCode</span>
            </Link>
          </Grid>
        </Grid>
      </StyledContainer>
      
      </>
      

  );
};

export default QRcode;
