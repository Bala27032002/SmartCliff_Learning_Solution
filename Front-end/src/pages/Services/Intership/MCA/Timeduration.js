import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutproUI from "../../../Courses/AboutproUI";
import Banner from "../../../../images/course1.webp";
import Banner1 from "../../../../images/program-delivery.png";
import Banner2 from "../../../../images/program-start.png";
import Banner3 from "../../../../images/eligibility.png";
import Banner4 from "../../../../images/duration.png";
function Timeduration() {
    const [cards, setCards] = useState([
        ,
        
        { title: "PROGRAM ELIGIBILITY", imgsrc: Banner3, des: "Graduation" },
        { title: "PROGRAM DURATION", imgsrc: Banner4 , des: "2 Years"},
        { title: "Program Highlights",imgsrc: Banner1,des: "Industry Driven--Training by Industry Experts--One to One Mentorship" },
        { title: "Program Outcomes" ,imgsrc: Banner2,des: "Guaranteed Industry Ready Skillset--100% Placement--Minimum Stipend of Rs.12000 during 4th Semester"},
      ]);

  return (
    <div className="container-fluid py-4 my-4">
      <div className="row text-center">
        <h3 className="mb-4 pb-4" style={{ fontFamily: "serif", color: "#66023b" }}>
          ABOUT PROGRAM
        </h3>
      </div>
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div className="col-6 col-lg-3" key={index}>
            <AboutproUI title={card.title} imgsrc={card.imgsrc} des={card.des} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeduration;