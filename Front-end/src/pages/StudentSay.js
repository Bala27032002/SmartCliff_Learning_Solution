import React from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Typography, Grid } from '@mui/material';
import Banner from "../images/Stusay.webp";
import Stu1 from "../images/Bala1 (2).jpg";
import Stu2 from "../images/suri.jpg";
import Stu3 from "../images/Mano.jpg";
import "../styles/HomeStyles.css";

const StudentSay = () => {
  const testimonials = [
    {
      id: 1,
      image: Stu1,
      testimonial: "We permit trainees to attend classes in their flexible ",
      name: 'Bala',
      rating: '4.5',
    },
    {
      id: 2,
      image:Stu2,
      testimonial: "We permit trainees to attend classes in their flexible.",
      name:'Arun',
      rating: '4.8',
    },
    {
      id: 3,
      image: Stu3,
      testimonial: "We permit trainees to attend classes in their flexible",
      name: 'Mano',
      rating: '4.2',
    },
  ];

  return (
    <Container style={{ position: 'relative', bottom: '5rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant='h4' sx={{ fontWeight: '600', textAlign: 'center', alignItems: 'center', color: '#66023b' }}>
            Our Employee Say
          </Typography>
          <Typography sx={{ fontWeight: '400', textAlign: 'center', alignItems: 'center', color: 'black' }}>
          SmartCliff Academy holds the Highly Professional Corporate Training programs on IT Software, Project Management, Soft skills and Agile Development.
          </Typography><br/>
          <Carousel style={{ position: 'relative' }}>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <Card style={{ width: '15rem', background: '#f7c1eb',position:'relative',left:'10rem' }}>
                  <Card.Img variant="top" style={{ height: '8.5rem',width:'9rem',position:'relative',left:'3rem',top:'0.5rem' }} src={testimonial.image} />
                  <Card.Body>
                    <Card.Text style={{ color: 'black'}}>{testimonial.testimonial}</Card.Text>
                    <Card.Title style={{ color: 'black' }}>{testimonial.name}</Card.Title>
                    <Card.Text style={{ color: 'black' }}>Rating: {testimonial.rating}</Card.Text>
                  </Card.Body>
                </Card><br/><br/>
              </Carousel.Item >
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Add your image component here */}
          <div className="movingImageContainer">
            <img style={{ position: 'relative' }} src={Banner} alt="logo" className="image" />
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentSay;
