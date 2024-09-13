import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const Card = styled(Box)(({ theme }) => ({
  width: '244px',
  textAlign: 'center',
  padding: '30px', // Update padding to 30px
  borderRadius: theme.spacing(1),
  height: '234px',
  margin: '0 auto', // Center the cards horizontally
}));

const YourComponent = () => {
  return (
    <div style={{position:'relative',bottom:'15rem'}}>
      {/* <Typography variant="h5" align="center" gutterBottom>
        The EduBridge Placement Promise - YOU Choose What YOU Want!
      </Typography> */}
      <Typography variant="h4" style={{textAlign:'center',fontFamily:'serif'}}gutterBottom className="responsive-typography" >
              <span style={{ color: '#000000',fontWeight:'900' }}>The  </span>
              <span style={{ color: '#66023b',fontWeight:'900' }}>SmartCliff </span>
              <span style={{ color: '#000000' ,fontWeight:'900'}}>Placement </span>
              <span style={{ color: '#000000',fontWeight:'900' }}>Promise </span>
              <span style={{ color: '#66023b',fontWeight:'900' }}>Your </span>
              <span style={{ color: '#66023b',fontWeight:'900' }}>Choose.</span>
              <span style={{ color: '#000000',fontWeight:'900' }}>What</span>
              <span style={{ color: '#66023b',fontWeight:'900' }}>You</span>
              <span style={{ color: '#000000',fontWeight:'900' }}>Want !</span>
            </Typography>   
            <h4 style={{textAlign:'center',justifyContent:'center',fontWeight:'900',fontFamily:'serif', color: '#66023b'}}>(Future)</h4><br/>
      <Grid container spacing={3} justifyContent="center"> {/* Update spacing to 3 */}
        <Grid item xs={6} sm={3}>
          <Card style={{ backgroundColor: '#ffeba7' }}>
            <Typography variant="h5" style={{ position: 'relative', top: '2.5rem', fontWeight: '700',fontFamily:'serif' }}>
              Customize Your Training Program
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card style={{ backgroundColor: '#ff4878' }}>
            <Typography variant="h5" style={{ position: 'relative', top: '3.3rem', fontWeight: '700', color: 'white',fontFamily:'serif' }}>
              Pay What You Decide
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card style={{ backgroundColor: '#cde9f0' }}>
            <Typography variant="h5" style={{ position: 'relative', top: '3.3rem', fontWeight: '700',fontFamily:'serif' }}>
              Make Your Own Schedule
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Card style={{ backgroundColor: '#00d0ff' }}>
            <Typography variant="h5" style={{ position: 'relative', top: '3.3rem', fontWeight: '700', color: 'white',fontFamily:'serif' }}>
              Make Your Own Schedule
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default YourComponent;
