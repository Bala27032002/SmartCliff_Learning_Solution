import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutproUI from "../Courses/AboutproUI";
import Banner from "../../images/commitment.png";
import Banner1 from "../../images/shield.png";
import Banner2 from "../../images/commitment.png";
import Banner3 from "../../images/money-back-guarantee.png";

function Placementcards() {
    const [cards, setCards] = useState([
        { title: " JOB  GUARANTEE ",imgsrc: Banner,des: "get a 100% or 110% Job Guarantee" },
        { title: "INTERVIEW GUARANTEE" ,imgsrc: Banner1,des: "Upon 70% training completion you are guaranteed 3 interviews!"},
        { title: "PLACEMENT ASSISTANCE", imgsrc: Banner2, des: "Getting a job is tough, and more so, in this economy." },
        { title: "HIGHEST DOMESTIC CTC ", imgsrc: Banner3 , des: "INR 12 Lakhs per annum by a leading IT firm."}
      ]);

  return (
    <div className="container-fluid py-4 my-4">
    <div className="row text-center">
      <h3 className="mb-4 pb-4" style={{ fontFamily: "serif", color: "#66023b", fontWeight: '700',position:'relative',bottom:'14rem'}}>
        Learn skills that get you a job today!
      </h3>
    </div>
    <div className="row justify-content-center">
      {cards.map((card, index) => (
        <div className="col-12 col-md-6 col-lg-3 mb-4" key={index}>
          <AboutproUI title={card.title} imgsrc={card.imgsrc} des={card.des} />
        </div>
      ))}
    </div>
  </div>
);
}

export default Placementcards;