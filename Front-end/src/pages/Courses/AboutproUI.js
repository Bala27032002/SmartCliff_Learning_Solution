import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Courses/Aboutpro.css";
import { Link } from "react-router-dom";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import { Button } from "@mui/material";

const AboutproUI = (props) => {
  return (
    <div className="container" style={{position:'relative',bottom:'12rem'}}>
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front p-3 text-center" style={{ backgroundColor: "#66023b", minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <img
                className="mx-auto mb-2"
                src={props.imgsrc}
                alt="Avatar"
                style={{ width: "80px", height: "80px" }}
              />
              <h6 className="text-center mb-2" style={{ color: "white" }}>
                {props.title}
              </h6>
            </div>
            <AdsClickIcon className="blinking-icon" style={{ color: "white" }} />
          </div>
          <div className="flip-card-back p-3 text-center" style={{ minHeight: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between", backgroundColor: "#66023b" }}>
            <h6 className="text-white">
              {props.title}
            </h6>
            <Link to={`${props.id} `}>
              <Button style={{ backgroundColor: "white", marginTop: "auto" }}>
                <p className="text-black" style={{ paddingTop: "12px", marginBottom: "0" }}>
                  {props.des}
                </p>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
         );
};

export default AboutproUI;
