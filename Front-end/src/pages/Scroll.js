import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
// import Banner from "../images/back2.jpg";
import "../styles/HomeStyles.css";
import { Grid, Typography } from "@mui/material";
import img1 from "../images/HCL-Logo-1976.png";
import img2 from "../images/Pricol_logo.png";
import img3 from "../images/oracle_logo.png";
import img4 from "../images/Tcslogo.png";
import img5 from "../images/Pricol_logo.png";
import img6 from "../images/cognizant_logo.png";
function Scroll() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scroll, setScroll] = useState([
    {
      id: 1,
      img: img1,
    },
    {
      id: 2,
      img: img2,
    },
    {
      id: 3,
      img: img3,
    },
    {
      id: 4,
      img: img4,
    },
    {
      id: 5,
      img: img5,
    },
    {
      id: 6,
      img: img6,
    },
    {
      id: 7,
      img: img3,
    },
    {
      id: 8,
      img: img4
    },
  ]);

  



  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  const backgroundImage = {
    // backgroundImage: `url(https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-pink-purple-gradient-beautiful-gradient-gradient-geometric-image_11522.jpg)`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "400px",
    // opacity: 0.8
  };

  return (
    <Grid  style={{ position:'relative',bottom:'1rem' }}>
 {/* <img style={{ position: "absolute",marginTop:'1rem',marginRight:"65rem" ,width: "9rem",zIndex:'1'}}src="https://smartcliff.in/assets/images/dotted-image1.png" /> */}
    <div className="overlay container-fluid my-5 pb-4" style={backgroundImage}>
     
      <div className="waviy pt-4 text-center">
      {/* <span style={{'--i': 1}}>O</span>
      <span style={{'--i': 2}}>U</span>
      <span style={{'--i': 3}}>R</span>&nbsp;&nbsp;
      <span style={{'--i': 4}}>P</span>
      <span style={{'--i': 5}}>R</span>
      <span style={{'--i': 6}}>E</span>
      <span style={{'--i': 7}}>S</span>
      <span style={{'--i': 8}}>T</span>
      <span style={{'--i': 9}}>I</span>
      <span style={{'--i': 10}}>G</span>
      <span style={{'--i': 11}}>E</span>
      <span style={{'--i': 12}}>O</span>
      <span style={{'--i': 13}}>U</span>
      <span style={{'--i': 14}}>S</span>&nbsp;&nbsp;
      <span style={{'--i': 15}}>C</span>
      <span style={{'--i': 16}}>O</span>
      <span style={{'--i': 17}}>M</span>
      <span style={{'--i': 18}}>P</span>
      <span style={{'--i': 19}}>A</span>
      <span style={{'--i': 20}}>N</span>
      <span style={{'--i': 21}}>Y</span> */}
     
      <Typography variant='h4' sx={{ fontWeight: '600', textAlign: 'center', alignItems: 'center', color: '#66023b',fontFamily:'serif' }}>
      Our Prestigeous company
        </Typography>
    </div>
     <br/>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect} interval={null}>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {scroll.slice(0, 4).map((item) => (
              <img
                key={item.id}
                src={item.img}
                className="d-block"
                alt={`Logo ${item.id}`}
                style={{ width: "200px", height: "150px" }}
              />
            ))}
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-flex justify-content-around">
            {scroll.slice(4, 8).map((item) => (
              <img
                key={item.id}
                src={item.img}
                className="d-block"
                alt={`Logo ${item.id}`}
                style={{ width: "200px", height: "150px" }}
              />
            ))}
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
    </Grid>
  );
}

export default Scroll;