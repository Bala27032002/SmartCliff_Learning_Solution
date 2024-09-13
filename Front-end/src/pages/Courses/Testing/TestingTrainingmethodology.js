import { Typography, Grid, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../../images/testtraining.png";
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

const TestingTrainingmethodology = () => {
  return (
   
      <>
         <Typography variant='h4'sx={{fontWeight:'600',textAlign:'center',color:'#66023b',position:'relative',top:'2rem'}}>Testing Training Methodology</Typography>
        <StyledContainer sx={{ position: 'relative' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Typography variant="h5" marginTop='5rem'  gutterBottom className="responsive-typography">
                <b>Check out our innovative key features in training methodologies. Our flexible training mechanisms incorporate all techniques right from knowledge assessment till setting placement records.</b><br/>
              </Typography>
              <Typography variant="body1">
              1.Train from professionals with industry experience<br/>
   2.Learn theoretical concepts and gain hands-on training simultaneously<br/>
   3.Real time Hands-On Practical Experience Training to imbibe corporate practices<br/>
   4.Get certified at the end of the training<br/>
   5.Receive placement support once the training is completed<br/>
   6.Getting exposure to latest technology up gradations.
              </Typography>
              <br />
              {/* <Link to="/menu">
                <Button
                  className="Enquirybutton"
                  variant="contained"
                  style={{ backgroundColor: "#4f0242", color: 'white' }}
                >
                  Enquiry Now
                </Button>
              </Link> */}
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

export default TestingTrainingmethodology;
