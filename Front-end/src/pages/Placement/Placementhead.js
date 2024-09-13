import { Typography, Grid, Container, Link } from '@mui/material';
import { styled } from '@mui/material/styles';
import Banner from "../../images/placement1.png";

import { Button } from 'react-bootstrap';

import TryUI from '../Courses/TryUI';

const StyledImage = styled('img')({
  maxWidth: '100%',
  height: 'auto',
  // animation: 'moveUpDown 2s infinite ease-in-out',
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

const Placementhead = () => {
  return (
    <>
     
      <StyledContainer sx={{ position: 'relative' }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6} order={{ xs: 2, sm: 1 }}>
            <Typography variant="h3" gutterBottom className="responsive-typography" style={{fontFamily:'serif'}}>
              <span style={{ color: '#000000',fontWeight:'900' }}>Get </span>
              <span style={{ color: '#66023b',fontWeight:'900' }}>Trained. </span>
              <span style={{ color: '#000000' ,fontWeight:'900'}}>Get </span>
              <span style={{ color: '#66023b',fontWeight:'900' }}>Hired. </span>
              <span style={{ color: '#000000',fontWeight:'900' }}>Our </span>
              <span style={{ color: '#66023b',fontWeight:'900' }}>Guarantee.</span>
            </Typography>
            {/* <Typography variant="body1">
              Power your career with great Full Stack learning and specialize on PHP, Python, HTML, CSS, Javascript,
              Angular JS and Node.js.
            </Typography> */}
            <br />
            
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

export default Placementhead;
