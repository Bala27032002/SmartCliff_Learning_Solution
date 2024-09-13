import { Typography, Grid, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../images/placement1.png";

import { Button } from 'react-bootstrap';



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
  order: 2,
});

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(2),
  marginBottom: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
  },
}));

const Javadetails = () => {
  return (
    <>
     
      <StyledContainer sx={{ position: 'relative' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Typography variant="h4" gutterBottom className="responsive-typography"style={{position:'relative',bottom:'5rem'}}>
              <span style={{ color: '#000000',fontWeight:'900' }}>Become a confident industry ready </span>
              <span style={{ color: '#ff007f',fontWeight:'900' }}>Core Java </span>
              <span style={{ color: '#000000' ,fontWeight:'900'}}>developer and get certified as a </span>
              <span style={{ color: '#ff007f',fontWeight:'900' }}> Java professional!</span>
              {/* <span style={{ color: '#000000',fontWeight:'900' }}>Our </span>
              <span style={{ color: '#ff007f',fontWeight:'900' }}>Guarantee.</span> */}
            </Typography><br></br>
             <Typography variant="body1" style={{position:'relative',bottom:'5rem'}}>
             Using Java, fundamental data types to advanced programming structures. You will learn Core Java ,Angular JS , Spring MVC
            </Typography> 
            <br /><br></br>
            <Link to="/menu">
              <Button
                className="Enquirybutton"
                variant="contained"
                style={{ backgroundColor: "#4f0242", color: 'white',position:'relative',bottom:'5rem' }}
              >
                Enquiry Now
              </Button>
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
            <StyledImage
              src={Banner}
              alt="About Image"
              style={{ animationDelay: '1s', marginBottom: '2rem' }}
            />
          </Grid>
        </Grid>
      </StyledContainer>
    </>
  );
};

export default Javadetails;
