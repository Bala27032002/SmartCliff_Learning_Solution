import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/Courses/Aboutpro.css";
import { Link } from "react-router-dom";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { Button } from "@mui/material";

const ServiceshomeUI = (props) => {
  return (
    <div className="container">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front p-4" style={{ backgroundColor: "#66023b" }}>
            <img className="text-center mb-3" src={props.imgsrc} alt="Avatar" style={{ width: "130px", height: "130px",position:'relative',bottom:'1.5rem' }} />
            <h6 className="text-center" style={{ color: "white" ,fontFamily:'serif',position:'relative',bottom:'1.9rem'}}>{props.title}</h6>
            <AdsClickIcon className="blinking-icon" style={{ color: "white",position:'relative',bottom:'1.7rem' }} />
          </div>
          <div className="flip-card-back p-4">
            <h6 className="text-center mb-3" style={{ color: "white" ,fontFamily:'serif'}}>{props.title}</h6>
            <Link to="/htd">
              <Button className="row" style={{ backgroundColor: "white",position:'relative',top:'1rem' }}>
                <p className="text-center text-black" style={{ paddingTop: "18px",position:'relative' }}>{props.des}</p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceshomeUI;
