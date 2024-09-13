import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Banner from "../../../images/premium2.png";
import CoreUI from "../../cardUI";
function Whyintership() {
  const cardData = [
    { text: "100% Handson Training", color: "#fac78c",logo:Banner },
    { text: "Training by MNC Trainers", color: "#9dd1fa",logo:Banner },
    { text: "Live Exposure to R&D Projects", color: "#e3a8e9",logo:Banner },
    { text: "IndustryCertificate", color: "#9ce8b5",logo:Banner },
    { text: "1 day to any Number of days", color: "#e3a8e9",logo:Banner },
    { text: "Placement Training", color: "#9ce8b5",logo:Banner },
    { text: "Complete Project Guidance ", color: "#fac78c",logo:Banner },
    { text: "Internship report Support", color: "#9ce8b5",logo:Banner },
  ];

  return (
    <>
    <h3 style={{fontWeight:'700',textAlign:'center',color:'#66023b',marginTop:'4rem'}}>WHY NSCHOOL ACADEMY FOR INTERNSHIPS?</h3><br/><br/>
    <div className="container-fluid py-4 my-4">
      <div className="row text-center">
        <h3
          className="mb-2 pb-3"
          style={{ fontFamily: "serif", color: "white" }}
        >
          
        </h3>
      </div>
      <div className="row justify-content-center">
        {cardData.map((card, index) => (
          <div className="col-md-6 col-lg-3" key={index}>
            <CoreUI text={card.text} color={card.color} logo={card.logo} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Whyintership;
