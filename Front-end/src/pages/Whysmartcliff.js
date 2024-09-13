import { Grid, Typography } from '@mui/material'
import React from 'react'
import Banner from "../images/Whysmartcliff.png";
import Banner1 from "../images/why1.webp";
import Banner2 from "../images/why2.webp";

function Whysmartcliff() {
  return (
    
    <Grid container className="home" style={{ height: "60rem", background: "#ffddb5",position:'relative',top:'5rem'}}>
      <Grid item xs={12} sm={6} className="contentContainer">
      <Grid item xs={12} sm={6} className="imageContainer">
          <div className="movingImageContainer">
          <Typography variant='h6'sx={{fontWeight:'600',position:'relative', marginRight:'10rem',top:'15rem', color:'white'}}>Why <br/>Skill Development through measurable transformation</Typography>
          <Typography variant='h6'sx={{fontWeight:'600',position:'relative', marginLeft:'36rem',top:'3rem', color:'white'}}>Why <br/>Skill Development through measurable transformation</Typography>
          <img style={{position:'relative',marginLeft:'7rem',top:'2.5rem'}} src={Banner1} alt="logo" className="image" title='bala'/>
          <img style={{position:'relative',marginLeft:'28rem',bottom:'6rem'}} src={Banner2} alt="logo" className="image" title='bala'/>
            <img style={{position:'relative',marginLeft:'11rem',bottom:'8rem'}} src={Banner} alt="logo" className="image" title='bala'/>
            <Typography variant='h4'sx={{fontWeight:'600',position:'relative', marginLeft:'17rem', bottom:'20rem',color:'white'}}>Why <br/>Smartcliff</Typography>
          </div>
        </Grid>
</Grid>
</Grid>


  )
}

export default Whysmartcliff