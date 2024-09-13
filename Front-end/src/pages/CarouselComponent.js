import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from "../images/Mount.png";
import Bannerp from "../images/Pricol_logo.png";
import Bannert from "../images/Tcslogo.png";
import Bannerz from "../images/zohologo.png";
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import "../styles/HomeStyles.css";

const CarouselComponent = () => {
  return (
    <>
     <Grid
      container
      className="home"
      style={{ height: '100%', background: 'white', position: 'relative', bottom: '5rem' }}
    >
      <Typography variant='h3' sx={{ fontWeight: '600', textAlign: 'center', alignItems: 'center', position: 'relative', top: '2rem' }}>
      OUR HIRING PARTNERS FOR PLACEMENTS

      </Typography>
      <Typography variant='h6' sx={{ alignItems: 'center', alignItems: 'center', position: 'relative', top: '2rem', marginLeft: '6rem' }}>
      Smartcliff Academy being the Best software training institute in coimbatore with placement has tied up with more than 50+ companies from MNC’s , CMM level and domestic IT companies.
      </Typography>
      <Carousel style={{ position: 'relative', top: '5rem', height: '100%' }}>
        <Carousel.Item>
          <img
            className="d-block image-center"
            src={Banner}
            alt="Slide 1"
            style={{ width: '30rem', height: '15rem' }}
            
          />
          
          {/* <Button style={{background:'#4f0242',height:'2rem',textAlign:'center',alignItems:'center',position:'relative',
          marginLeft:'12rem'
        }}>Discover</Button> */}
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-center"
            src={Bannerp}
            alt="Slide 2"
            style={{ width: '30rem', height: '15rem' }}
          />

        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-center"
            src={Bannert}
            alt="Slide 3"
            style={{ width: '30rem', height: '15rem' }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block image-center"
            src={Bannerz}
            alt="Slide 3"
            style={{ width: '30rem', height: '15rem' }}
          />
        </Carousel.Item>
      </Carousel>
      </Grid>
    </>
  );
};

export default CarouselComponent;
