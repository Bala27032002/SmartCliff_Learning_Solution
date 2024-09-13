import { Typography, Grid, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../../images/services1.webp";
import { Button } from 'react-bootstrap';
import ServiceEnquiry from '../ServiceEnquiry';
import InstershipEnquiry from './InstershipEnquiry';



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

const Traininghead = () => {
  return (
   
      <>
         {/* <Typography variant='h4'sx={{fontWeight:'600',textAlign:'center',color:'#66023b',position:'relative',top:'2rem'}}>Intership Training</Typography> */}
        <StyledContainer sx={{ position: 'relative' }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
              <Typography variant="h4"  style={{position:'relative',bottom:'6rem',fontFamily:'serif',color:'#66023b',fontWeight:'600'}}  gutterBottom className="responsive-typography">
              Smartcliff Academy extends you a seamless process of Internship in a company. 
              </Typography>
              <Typography style={{textAlign:'justify',position:'relative',bottom:'5rem'}} variant="body1">
              Choose an Internship role, access learning resources, get skilled mentor support, and complete the assigned project within the Target.The internship program is a unique learning platform for students to experience the corporate world and sharpen their technical skills.
              </Typography>
              <br />
             <InstershipEnquiry/>
              {/* <Link to="/menu">
                <Button
                  className="Enquirybutton"
                  variant="contained"
                  style={{ backgroundColor: "#66023b", color: 'white',position:'relative',bottom:'5rem' }}
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

export default Traininghead;
