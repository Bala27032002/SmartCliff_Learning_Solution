import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from "@mui/material";
import ServiceshomeUI from "./ServiceshomeUI";
import "../styles/service.css";
import Banner from "../images/hireimg2.png";
import Banner1 from "../images/mcaimg.png";
import Banner2 from "../images/lateralimg.png";

function Servicehome() {
  const [cards, setCards] = useState([
    { title: "Hire Train Deploy", imgsrc: Banner, des: "Read more" },
    { title: "MCA Program", imgsrc: Banner1, des: "Read more" },
    { title: "Institutional Training", imgsrc: Banner2, des: "Read more" },
    { title: "Lateral Trainer", imgsrc: Banner, des: "Read more" },
  ]);

  return (
    <Grid container className="home" style={{ paddingBottom: "2rem",height:'100%' }}>
      <img
        style={{ position: "absolute", marginTop: "1rem", marginRight: "65rem", width: "9rem", zIndex: "-1" }}
        src="https://smartcliff.in/assets/images/dotted-image1.png"
      />
      <div className="container-fluid py-4 my-4">
        <div className="row text-center">
          <h3 className="mb-4 pb-4" style={{ fontFamily: "serif", color: "#442260", fontWeight: "600", color: "#66023b" }}>
            Our Services
          </h3>
        </div>
        <div className="row justify-content-center">
          {cards.map((card, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-3" key={index}>
              <ServiceshomeUI title={card.title} imgsrc={card.imgsrc} des={card.des} />
            </div>
          ))}
        </div>
        <style>
    {`
      @media (max-width: 768px) {
        .home {
          position: relative;
          right: 1.5rem;
          
          
        }
      }
    `}
  </style>
      </div>
    </Grid>
  );
}

export default Servicehome;
