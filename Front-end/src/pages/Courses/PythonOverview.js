import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';


const styles = {
  container: {
    width: '100%',
    height: '5rem',
    backgroundColor: '#66023b',
    display: 'flex',
    alignItems: 'left',
    justifyContent: 'left',
  },
  heading: {
    color: '#ffffff',
    fontSize: '1.2rem',
    fontWeight:'500',
    
   paddingLeft:'10rem',
   paddingTop:'1.5rem',
    paddingBottom: '10rem  solid #ffffff',
  },
};


const PythonOverview = () => {
  return (
    <Grid sx={{marginTop:'4rem'}}>
    <div style={styles.container}>
      <h4  style={styles.heading}>Are you Interest for this Course?</h4><span><Link style={{position:'relative',left:'50rem',textDecoration:'none',color:'white',
    top:'1.5rem',fontSize:'1.2rem',fontWeight:'500',
    }}>Enquiry</Link></span>
    </div>
    </Grid>
  );
};

export default PythonOverview;
