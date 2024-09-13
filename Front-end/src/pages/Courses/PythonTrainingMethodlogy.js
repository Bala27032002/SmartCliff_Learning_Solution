import { Typography, Grid, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../images/PythonTrainingMethodology.png";
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

const PythonTrainingMethodlogy = () => {
  return (
   
      <>
         <Typography variant='h4'sx={{fontWeight:'600',textAlign:'center',color:'#66023b',position:'relative'}}>Python Training Methodology</Typography>
        <StyledContainer sx={{ position: 'relative' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Typography variant="h5" style={{ textAlign: "justify"}}  gutterBottom className="responsive-typography">
              <b>Check out our innovative key features in training methodologies. Our flexible training mechanisms incorporate all techniques right from knowledge assessment till setting placement records.</b>
              </Typography>
              <Typography variant="body1">
              1.Gain knowledge from experienced professionals in the field.<br/>
  2.Learn both theoretical concepts and gain practical experience at the same time.<br/>
  3.Training that provides real-world, hands-on experience in order to teach proper workplace practices.<br/>
  4.Grab certification upon completion of training<br/>
  5.Receive placement assistance following completion of training<br/>
  6.Being exposed to the most recent technological advancements.
              </Typography>
              <br />
              {/* <Link to="/menu">
                <Button
                  className="Enquirybutton"
                  variant="contained"
                  style={{ backgroundColor: "#4f0242", color: 'white' }}
                >
                  Enquiry Now
                </Button> */}
              {/* </Link> */}
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

export default PythonTrainingMethodlogy;
