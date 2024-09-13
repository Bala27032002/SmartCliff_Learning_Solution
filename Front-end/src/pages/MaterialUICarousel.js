import React, { useState, useEffect } from 'react';
import { Card, CardMedia, Container, Grid, Typography, Button, Modal, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import Banner from "../images/Programmingimg.jpg";
import Banner2 from "../images/embeddedimage.jpg";
import Banner3 from "../images/testing image.jpg";
import Banner4 from "../images/Certified-CAD-Engineer-1024x472-Manufacturing-Infrastructure-Industry-Outreach.jpg";
import EnquiryForm from './EnquiryForm';

const cardsData = [
  {
    image: Banner,
    title: 'Software Development',
    description: ' programming languages (e.g., Python,JavaScript,Java,C++,etc) and their applications.',
    route: '/program',
  },
  {
    image: Banner2,
    title: 'Embedded Program',
    description: 'Embedded systems in everyday life. Popular microcontroller families(e.g.,Arduino,PIC,STM32, etc) ',
    route: '/embedded'
  },
  {
    image: Banner3,
    title: 'Testing Track',
    description: 'Embedded systems in everyday life. Popular microcontroller families(e.g.,Arduino,PIC,STM32, etc) ',
    route: '/testing',
  },
  // {
  //   image: Banner4,
  //   title: 'Mechanical Design',
  //   description: 'Embedded systems in everyday life. Popular microcontroller families (e.g., Arduino, PIC, STM32,etc) ',
  //   route: '/testing',
  // },
];

const MaterialUICarousel = () => {
  const [showAll, setShowAll] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCardLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardsData.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // slice
  const cardsDatas = showAll ? cardsData : cardsData.slice(0, 3);

  const toggleShowAll = () => {
    setShowAll((prevShowAll) => !prevShowAll);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Grid container className="home" style={{ height: "100%", position: 'relative', bottom: '4rem' }}>
        <img style={{ position: "absolute", marginTop: '8rem', marginRight: "70rem", width: "9rem", zIndex: '-1' }} src="https://smartcliff.in/assets/images/dotted-image1.png" />
        <Typography variant='h4' sx={{ fontFamily: "serif", fontWeight: '600', textAlign: 'center', alignItems: 'center', position: 'relative', top: '2rem', color: '#66023b' }}>
          Our Featured Courses
        </Typography>
        <Typography variant='h6' sx={{ alignItems: 'center', alignItems: 'center', position: 'relative', top: '2rem', marginLeft: '2.4rem', color: 'black',textAlign:'justify' }}>
          Being the Best software training institute in coimbatore we help you gain expertise knowledge and build a successful career.
        </Typography>
        <Container className='course' maxWidth="md" sx={{ position: 'relative', top: '4rem' }}>
          <Grid container spacing={4}> {/* Increased spacing between cards */}
            {cardsDatas.map((card, index) => (
              <Grid  item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s',
                    transform: `translateY(${hoveredIndex === index ? '-10px' : '0'})`,
                    backgroundColor: hoveredIndex === index ? '#4f0242' : '#fad7f1',
                    color: hoveredIndex === index ? '#ffffff' : '#000000',
                    boxShadow: hoveredIndex === index ? '0px 6px 10px rgba(0, 0, 0, 0.1)' : 'none',
                    borderRadius: '10px',
                  }}
                  onMouseEnter={() => handleCardHover(index)}
                  onMouseLeave={handleCardLeave}
                >
                  <CardMedia
                    component="img"
                    height="230"
                    src={card.image}
                    alt={card.title}
                  />
                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ fontFamily: "serif", fontWeight: '550   ' }}>{card.title}</h4>
                    <p style={{textAlign:'justify'}}>{card.description}</p>
                    <hr></hr>
                    <Button variant="contained" sx={{ background: hoveredIndex === index ? '#ffffff' : '#66023b', color: hoveredIndex === index ? '#66023b' : '#ffffff' }} onClick={openModal}>
                      Discover
                    </Button>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
          <style>
    {`
      @media (max-width: 768px) {
        .course {
          position: relative;
          left: 1.5rem;
          
          
        }
      }
    `}
  </style>
          {/* <img style={{ position: "absolute", marginTop: '-8rem', marginLeft: "60rem", width: "6rem", zIndex: '-1' }} src="https://smartcliff.in/assets/images/shape8.png" /> */}
          {/* <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
            {showAll ? (
              <Button variant="contained" style={{ backgroundColor: '#66023b', color: 'white' }} onClick={toggleShowAll}>
                View Less
              </Button>
            ) : (
              <Button variant="contained" style={{ backgroundColor: '#66023b', color: 'white' }} onClick={toggleShowAll}>
                View All
              </Button>
            )}
          </div> */}
          {/* <Link style={{textDecoration:'none'}} to={"/course"}>
          <Button variant="contained" style={{ backgroundColor: '#66023b', color: 'white',display: 'flex', justifyContent: 'center', marginTop: '2rem',position:"relative",left:'24rem' }} onClick={toggleShowAll}>
                View All
              </Button>
              </Link> */}
        </Container>
      </Grid>
      <Modal
        open={isModalOpen}
        onClose={closeModal}
        // aria-labelledby="enquiry-modal-title"
        // aria-describedby="enquiry-modal-description"
      >
        {/* <Box sx={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', position: 'absolute', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: '8px', width: '400px' }}> */}
          {/* <Typography id="enquiry-modal-title" variant="h4" component="h2" sx={{ fontWeight: '600', textAlign: 'center', mb: 2 }}> */}
            {/* Enquiry Now */}
          {/* </Typography> */}
          <EnquiryForm />
        {/* </Box> */}
      </Modal>
    </>
  );
};

export default MaterialUICarousel;
