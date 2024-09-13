import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
// import Banner from "../images/back2.jpg";
import "../../styles/HomeStyles.css";
import { Grid, Typography } from "@mui/material";
import img1 from "../../images/HCL-Logo-1976.png";
import img2 from "../../images/Pricol_logo.png";
import img3 from "../../images/oracle_logo.png";
import img4 from "../../images/Tcslogo.png";
import img5 from "../../images/Pricol_logo.png";
import img6 from "../../images/cognizant_logo.png";
function Placementcompany() {
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
    <Grid  style={{ position:'relative',bottom:'3rem' }}>

    <div className="overlay container-fluid my-5 pb-4" style={backgroundImage}>
     
     
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

export default Placementcompany;