import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../about/about.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmileBeam } from '@fortawesome/free-solid-svg-icons';

const Sample = (props) => {
  return (
    <div className="container p-4">
        <div className="row">
          <div className="col text-start justify-content-center mt-2 pt-2 d-flex" style={{marginRight: "20px",marginLeft: "20px"}}>
          <FontAwesomeIcon icon={faSmileBeam} spin  style={{color: "#fcee71", width: "25px", height: "25px", alignItems: "center"}}/>&nbsp;&nbsp;
          <h5 className="text-center" style={{color: "white",fontFamily: "serif"}}>{props.title}</h5>
          </div>
        </div>
        <div className="row">
          <div className="col text-dark text-start">
            <small className="text-start" style={{color: "white",fontFamily: "serif"}}>{props.text}</small>
          </div>
        </div>
      </div>
  );
}

export default Sample;