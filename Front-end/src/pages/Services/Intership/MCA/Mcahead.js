import { Typography, Grid, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../../../images/mcaimage.webp";
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

const Mcahead = () => {
  
  return (
   
      <>
      
         {/* <Typography variant='h4'sx={{fontWeight:'600',textAlign:'center',color:'#66023b',position:'relative',top:'2rem'}}>MASTER OF COMPUTER APPLICATIONS</Typography> */}
        <StyledContainer sx={{ position: 'relative',bottom:'2rem' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Typography variant="h4" style={{fontWeight:'700',color:'#66023b',fontFamily:'serif'}}  gutterBottom className="responsive-typography">
              ABOUT THE PROGRAM
              </Typography>
              <Typography variant="body1">
              SmartCliff, Coimbatore in association with Sri Venkateswara College of Computer Applicatio
              ns and Management affiliated to Anna University, Chennai, is offering an 'Industry-driven' MCA Programme. . Our Industry connect is sure shot bound to assure<b> paid internships and 100% placement.</b>
               SmartCliff ascertains to provide the right pedestal to jump start your career.
              </Typography>
              <br />
              {/* <Link to="/MainRegister">
  <Button
    className="Enquirybutton"
    variant="contained"
    style={{ backgroundColor: "#66023b", color: 'white', zIndex: -9999 }} // Updated z-index value
  >
    Apply Now
  </Button>
</Link> */}
            </Grid>
            <Grid item xs={12} sm={6} order={{ xs: 1, sm: 2 }}>
              <StyledImage
                src={Banner}
                alt="About Image"
                style={{ animationDelay: '1s', marginBottom: '2rem',position:'relative',top:'3rem',left:'4rem',height:'27rem' }}
              />
            </Grid>
          </Grid>
        </StyledContainer>
</>
  );
};

export default Mcahead;
