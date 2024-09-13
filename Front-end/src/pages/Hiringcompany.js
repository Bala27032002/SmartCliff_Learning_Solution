import React from 'react';
import { Carousel } from 'react-bootstrap';
import Banner from "../images/Mount.png";
import Bannerp from "../images/Pricol_logo.png";
import Bannera from "../images/Aosta_Logo.png";
import { Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/HomeStyles.css';

const HiringPartnerSlider = () => {
  const hiringPartners = [
    { id: 1, name: 'Company 1', image: Banner },
    { id: 2, name: 'Company 2', image: Bannerp },
    { id: 3, name: 'Company 3', image: Bannera },
    // Add more hiring partner objects for each company
  ];

  return (
    <Carousel fade interval={3000} nextIcon={<span className="carousel-arrow">&#9654;</span>} prevIcon={<span className="carousel-arrow">&#9664;</span>} nextLabel="" prevLabel="">
        <Typography variant='h2' sx={{fontWeight:'600',}}>Recruitment Clients</Typography>
        <Typography variant='h6' sx={{fontWeight:'400',}}>Smartcliff Academy being the Best software training institute in coimbatore with placement
         has tied up with more than 50+ companies from MNC’s , CMM level and domestic IT companies.</Typography>
      {hiringPartners.map((partner) => (
        <Carousel.Item key={partner.id}>
          <img
            className="d-block mx-auto"
            src={partner.image}
            alt={partner.name}
            style={{ width: '30rem', height: '10rem' }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default HiringPartnerSlider;
