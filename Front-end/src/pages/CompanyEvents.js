import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Event1 from "../images/zohologo.png";
import Event2 from "../images/Tcslogo.png";
import Event3 from "../images/Mount.png";
import { Typography, Button } from '@mui/material';
import "../styles/HomeStyles.css";

const CompanyEvents = () => {
  const events = [
    {
      id: 1,
      image: Event1,
      name: 'Web Development,Java Development',
      price: '$199',
      date: 'August 15, 2023',
    },
    {
      id: 2,
      image: Event2,
      name: 'Data Science Conference',
      price: '$299',
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
    <Container style={{ position: 'relative', top: '10rem' }}>
      <Typography variant='h4' sx={{ color: '#4f0242', fontWeight: '600', textAlign: 'center', alignItems: 'center' }}>
        Events and Offers
      </Typography><br/><br/>
      <Row className="justify-content-center">
        {events.map((event) => (
          <Col xs={12} md={4} key={event.id} style={{ marginBottom: '2rem' }}>
            <Card className="event-card">
              <div className="card-image">
                <Card.Img variant="top" src={event.image} alt="Event" />
              </div>
              <Card.Body>
                <Card.Title style={{ color: '#4f0242' }}>{event.name}</Card.Title>
                <hr />
                <Card.Text style={{ color: '#4f0242' }}>Date: {event.date}</Card.Text>
                <Card.Text style={{ color: '#4f0242' }}>Price: {event.price}</Card.Text>
                {/* <Button variant="contained" style={{ backgroundColor: "#4f0242" }}>Read More</Button> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CompanyEvents;
