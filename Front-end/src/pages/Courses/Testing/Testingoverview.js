import { Grid } from '@mui/material';
import React from 'react';

const styles = {
  container: {
    width: '100%',
    height: '5rem',
    backgroundColor: '#4f0242',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#ffffff',
    fontSize: '1.5rem',
    fontWeight:'600',
    textDecoration: 'underline',
   
    paddingBottom: '6px solid #ffffff',
  },
};

const Testingoverview = () => {
  return (
    <Grid sx={{marginTop:'4rem'}}>
    <div style={styles.container}>
      <h4  style={styles.heading}>SoftwareTesting</h4>
    </div>
    </Grid>
  );
};

export default Testingoverview;
