import React from 'react';
import { Carousel, Card, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner1 from "../../images/left-quote@2x.png";
import Banner2 from "../../images/left-quote_8.png";
import { Typography, Grid } from '@mui/material';

import Stu1 from "../../images/pic1.avif";
import Stu2 from "../../images/pic2.avif";
import Stu3 from "../../images/pic3.avif";
import Stu4 from "../../images/pic4.jpg";
import "../../styles/HomeStyles.css";

const Placedemployee = () => {
  const testimonials = [
    {
      id: 1,
      image: Stu1,
      testimonial: "The training I received at SmartCliff helped me a lot in shaping my future...",
      content:'After completing her graduation, Pavithra was not able to get a job despite multiple efforts. When she came across the advertisement from EduBridge, it seemed to be the right choice for her to explore. The Post Graduation Certificate in Python and Ruby on Rails course, seemed like the most apt optio...  ',
      name: 'Bala',
      role: 'Software Engineer',
      salary:'4.5LPA',
      placed:'Logo'

    },
    {
      id: 2,
      image: Stu2,
      testimonial: "We permit trainees to attend classes in their flexible.",
      content:'After completing her graduation, Pavithra was not able to get a job despite multiple efforts. When she came across the advertisement from EduBridge, it seemed to be the right choice for her to explore. The Post Graduation Certificate in Python and Ruby on Rails course, seemed like the most apt optio...  ',
      name: 'Arunachalam',
      role: 'Front-End Developer',
      salary:'4.5LPA',
      placed:'Logo'
    },
    {
      id: 3,
      image: Stu3,
      testimonial: "We permit trainees to attend classes in their flexible",
      content:'After completing her graduation, Pavithra was not able to get a job despite multiple efforts. When she came across the advertisement from EduBridge, it seemed to be the right choice for her to explore. The Post Graduation Certificate in Python and Ruby on Rails course, seemed like the most apt optio...  ',
      name: 'Manogar',
      role: 'Testing',
      salary:'4.5LPA',
      placed:'Logo'
    },
    {
      id: 4,
      image: Stu4,
      testimonial: "We permit trainees to attend classes in their flexible",
      content:'After completing her graduation, Pavithra was not able to get a job despite multiple efforts. When she came across the advertisement from EduBridge, it seemed to be the right choice for her to explore. The Post Graduation Certificate in Python and Ruby on Rails course, seemed like the most apt optio...  ',
    name: 'Prakash',
      role: 'UI Designer',
      salary:'4.5LPA',
      placed:'Logo'

    },
  ];

  return (
    <Container style={{ position: 'relative',bottom:'relative',bottom:'7rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          {/* <Typography variant='h4' sx={{ fontWeight: '600', textAlign: 'center', alignItems: 'center', color: '#66023b',fontFamily:'serif' }}>
            Our Employee Say
          </Typography> */}
          {/* <Typography sx={{ fontWeight: '400', textAlign: 'center', alignItems: 'center', color: 'black' }}>
            SmartCliff Academy holds the Highly Professional Corporate Training programs on IT Software, Project Management, Soft skills, and Agile Development.
          </Typography><br/> */}
          <Carousel style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {testimonials.map((testimonial) => (
              <Carousel.Item key={testimonial.id}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '50%' }}>
                    <img src={testimonial.image} alt="Student" style={{ height: '20rem', width: '20rem', marginLeft: '8rem', maxWidth: '100%' }} />
                  </div>
                  <div style={{ width: '50%' }}>
                    <Card style={{ background: '#fce3f7',height:'25rem' }}>
                      <Card.Body>
                      <img style={{  width: "1.4rem",yIndex:'-2'}}src={Banner1} />

                        <Card.Text style={{ color: 'black',fontSize:'2rem',fontFamily:'serif' }}>{testimonial.testimonial}</Card.Text>
                        <Card.Title style={{ color: 'black' ,fontSize:'15px',fontFamily:'serif'}}>{testimonial.content}</Card.Title>
                        <hr></hr>
                        <Card.Title style={{ color: 'black',fontWeight:'600',fontFamily:'serif' }}>{testimonial.name}</Card.Title>
                        <Card.Text style={{ color: 'black',fontWeight:'100' ,fontFamily:'serif'}}>Role: {testimonial.role}</Card.Text>
                        <Card.Text style={{ color: 'black',fontWeight:'100',fontWeight:'600',position:'relative',bottom:'0.7rem',fontFamily:'serif' }}>Annual Salary Offered: {testimonial.salary}</Card.Text>
                        <Card.Text style={{ color: 'black',fontWeight:'100',fontWeight:'400',position:'relative',bottom:'0.7rem' ,fontFamily:'serif'}}>Placed in | {testimonial.placed}</Card.Text>
                        {/* <img style={{  width: "1.4rem",yIndex:'-2',position:'relative',left:'',bottom:'3rem'}}src={Banner2} /> */}
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Placedemployee;
