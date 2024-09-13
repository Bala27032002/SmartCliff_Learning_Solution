import React, { useEffect, useState } from 'react';
import { Container, Typography, Card, CardContent, Button } from '@mui/material';
import Banner from "../images/loginimg.webp";
import { Link } from 'react-router-dom';
import EnquriyModal from "../../src/components/Modal/EnquriyModal";
import JoinusModal from '../components/Modal/JoinusModal';


const PlacementHireForm = () => {
  const [typedText, setTypedText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isJoinUsModalOpen, setIsJoinUsModalOpen] = useState(false);
const [isEnrollModalOpen, setIsEnrollModalOpen] = useState(false);
  const dynamicText = "Join us for SmartCliff";
  const typingSpeed = 100; // Adjust typing speed in milliseconds

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;
    let timerId;

    const typeText = () => {
      currentText += dynamicText[currentIndex];
      setTypedText(currentText);
      currentIndex++;

      if (currentIndex === dynamicText.length) {
        clearTimeout(timerId);
      } else {
        timerId = setTimeout(typeText, typingSpeed);
      }
    };

    timerId = setTimeout(typeText, typingSpeed);

    return () => {
      clearTimeout(timerId);
    };
  }, []);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openJoinUsModal = () => {
    setIsJoinUsModalOpen(true);
  };
  
  const closeJoinUsModal = () => {
    setIsJoinUsModalOpen(false);
  };
  
  const openEnrollModal = () => {
    setIsEnrollModalOpen(true);
  };
  
  const closeEnrollModal = () => {
    setIsEnrollModalOpen(false);
  };
  return (
    <>
    <img style={{ position: "absolute",marginTop:'-35rem',marginLeft:"60rem" ,width: "8rem",zIndex:'1',position:'relative',left:'4rem'}}src="	https://smartcliff.in/assets/images/dotted-image1.png" />
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        position: 'relative',
        bottom:'12rem',
        // background: '#f7e6d2',
        width: '90rem',
      }}
    >
      
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          margin: '16px',
          
        }}
      >
        <img
          src={Banner}
          alt="Learning Experience"
          style={{
            width: '25rem',
           
            maxWidth: '25rem',
            height: '20rem',
           
           
          }}
        />
        <Typography
          variant="h5"
          style={{
            fontWeight: '700',
            fontSize: '2rem',
            marginTop: '1rem',
            color: '#66023b',
            fontFamily:'serif'
          }}
        >
          Fast Forward Your Career
        </Typography>
        <Link>
        <div style={{ marginTop: '1rem' }}>
        {/* <Button variant="contained" color="primary" style={{ marginRight: '1rem', background: '#66023b', fontFamily: 'serif' }} onClick={openJoinUsModal}>
  Join us
</Button> */}
        </div>
        </Link>
      </div>

      <Card
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '370px',
          height: '370px',
          margin: '16px',
          backgroundColor: '#66023b',
          // animation: 'moveUpDown 2s infinite',
        }}
      >
        <CardContent>
          <Typography variant="h4" gutterBottom style={{ color: 'white', fontWeight: '500',fontFamily:'serif' }}>
            {typedText}
          </Typography>
          <br />
          <h4 style={{ fontFamily: "serif", color: "#de8c7e",fontFamily:'serif' }}>
              Enroll for an<br />
              incredible<br />
              learning<br />
              experience!
            </h4>
            <div className="row text-center justify-content-center mt-4">
            <Link onClick={() => window.scrollTo(0, 0)}> 
  <button className="pulse-effect" style={{ width: "100px", height: "40px", backgroundColor: "white", border: "none", color: "black" }} onClick={openEnrollModal}>Enroll</button>
</Link>
            </div>
        </CardContent>
      </Card>
    </Container>
    <img style={{ position: "absolute", marginTop: '-15rem', marginLeft: "67rem", width: "6rem", zIndex: '1' }} src="https://smartcliff.in/assets/images/shape8.png" />
    <EnquriyModal open={isEnrollModalOpen} handleClose={closeEnrollModal} />
<JoinusModal open={isJoinUsModalOpen} handleClose={closeJoinUsModal} />
    </>   
  );
};

export default PlacementHireForm;
