import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutproUI from "../Courses/AboutproUI";
import Banner from "../../images/course1.webp";

function Aboutpro() {
    const [cards, setCards] = useState([
        { title: "PROGRAM DELIVERY",imgsrc: Banner,des: "Online/Offline Sessions" },
        { title: "PROGRAM START DATE" ,imgsrc: Banner,des: "1st of every month"},
        { title: "PROGRAM ELIGIBILITY", imgsrc: Banner, des: "Graduation" },
        { title: "PROGRAM DURATION", imgsrc: Banner , des: "3 months"}
      ]);

  return (
    <div className="container-fluid py-4 my-4">
      <div className="row text-center">
        <h3 className="mb-4 pb-4" style={{ fontFamily: "serif", color: "#442260" }}>
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

export default Aboutpro;