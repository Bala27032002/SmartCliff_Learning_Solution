import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AboutproUI from "../Courses/AboutproUI";
import Banner1 from "../../images/program-delivery.png";
import Banner2 from "../../images/program-start.png";
import Banner3 from "../../images/eligibility.png";
import Banner4 from "../../images/duration.png";

function Aboutpro() {
    const [cards, setCards] = useState([
        { title: "Java Full Stack",imgsrc: Banner1,des: "Know More",id:'/java' },
        { title: "Python Full Stack" ,imgsrc: Banner2,des: "Know More",id:'/python' },
        { title: "PROGRAM ELIGIBILITY", imgsrc: Banner3, des:"Know More" },
        { title: "PROGRAM DURATION", imgsrc: Banner4 , des: "Know More" }
      ]);

  return (
//     <StyledContainer sx={{ position: 'relative', marginTop: '5rem' }}>
//   <Grid container spacing={2} alignItems="center" id="scrollToWhyJava">
//     {/* ... */}
//   </Grid>
// </StyledContainer>

    <div className="container-fluid py-4 my-4" >
      <div className="row text-center">
        <h3 className="mb-4 pb-4" style={{ fontFamily: "serif", color: "#442260" }}>
          ABOUT PROGRAM
        </h3>
      </div>
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div className="col-6 col-lg-3" key={index}>
            <AboutproUI title={card.title} imgsrc={card.imgsrc} des={card.des} id={card.id} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aboutpro;