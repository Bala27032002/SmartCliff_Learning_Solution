import React from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event1 from "../images/Mount.png";
import Event2 from "../images/Mount.png";
import Event3 from "../images/Mount.png";
import Event4 from "../images/Mount.png";
import CoreUI from "./cardUI"
import "../styles/HomeStyles.css";
import { Typography, Grid, Button } from '@mui/material';

const Events = () => {
  // const cardData = [
  //   { text: "Premium Training", color: "#fac78c" },
  //   { text: "100% Placement Support", color: "#9dd1fa" },
  //   { text: "IT Developer as Trainer", color: "#e3a8e9" },
  //   { text: "Trending Project & Assignment", color: "#9ce8b5" },
  // ];
  const events = [

    {
      id: 1,
      image: Event1,
      name: 'Workshop on Web Development',
      price: 'Free',
      date: 'August 15, 2023',
    },
    {
      id: 2,
      image: Event2,
      name: 'Data Science Conference',
      price: '$199',
      date: 'September 22-23, 2023',
    },
    {
      id: 3,
      image: Event3,
      name: 'Cloud Computing Seminar',
      price: '$99',
      date: 'October 10, 2023',
    },
  
  ];

  return (
    <>
    <Container style={{ position: 'relative',bottom:'3rem'}}>
      <Typography variant='h4' sx={{ color:'#4f0242',fontWeight: '600', textAlign: 'center', alignItems: 'center' }}>Events and Offers</Typography>
      <Grid container justifyContent="center">
        <Carousel >
          {events.map((event) => (
            <Carousel.Item key={event.id}>
              <Card style={{ width: '45rem', height: '28rem',background:'#f7dab7' }}>
                <Card.Img variant="top" src={event.image} alt="Event" />
                <Card.Body>
                  <Card.Title>{event.name}</Card.Title>
                  <Card.Text>Price: {event.price}</Card.Text>
                  <Card.Text>Date: {event.date}</Card.Text>
                  <Button variant="contained"  style={{ backgroundColor: "#4f0242" }}>Apply Now</Button>
                </Card.Body>
              </Card>
            </Carousel.Item>
          ))}
        </Carousel>
      </Grid>
      <CoreUI text={"name"} color={"mbhjhj"} />
    </Container>
    
    </>
  );
};

export default Events;
