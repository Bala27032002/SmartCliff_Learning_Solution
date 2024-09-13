import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import CoreUI from "./coreUI";
import AboutCoreUI from "../../AboutCoreUI";

function StepsComponent() {
  const [cards, setCards] = useState([
    { text: "Smartclif  Technologies is No. 1 Leading training Institute in Coimbatore offering classroom training on Java, python, .NET and Oracle.", title: "SoftwareTraining" },
    { text: "Project Training Get Trained from anywhere with an Internet connection. Instructors teach students in a classroom and you can attend these courses online in real-time also. Includes demonstrations & hands-on lab sessions..", title: "Project Training" },
    { text: "Your team trained at your company premises. Learn content tailored to match your organization specific needs. You set the date & time and we deliver it.", title: "IT Consulting" },
    { text: "We have experienced faculty to train professionals for improving their technology skills to day to day needs.", title: "Corporate Training" }
  ]);

  return (
    <div style={{background:'#66023b',position:'relative'}}  className="container-fluid py-4 my-4">
      <div className="row text-center">
        <h3 className="mb-2 pb-3" style={{ fontFamily: "serif", color: "white" }}>
         <u> </u>
        </h3>
      </div>
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div className="col-6" key={index} style={{width: "500px"}}>
            <AboutCoreUI text={card.text} title={card.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepsComponent;

