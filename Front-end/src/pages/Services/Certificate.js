import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../images/Certificate.jpeg"
import { Link } from "react-router-dom";

function Certificate() {
  
  return (
    <div className="container-fluid py-4 my-4"style={{position:'relative',bottom:'10rem'}}>

        <div className="row">

            <div className="col-lg-7" style={{position:'relative'}}>
               <img src={logo} className="img-fluid w-100" />
            </div>

            <div className="col-lg-5"style={{position:'relative'}}>
                <div className="row d-flex">
                <h2 style={{paddingTop: "60px", fontFamily: "serif", color: "#66023b"}}>CERTIFICATES</h2>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="#66023b" class="bi bi-mortarboard-fill" viewBox="0 0 16 16">
  <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
  <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
</svg>
                </div>
                <p style={{paddingTop: "20px", fontFamily: "serif"}}>You will receive the following certificates on successful completion<br /> of the program.</p>
                <div className="col text-center">
                <Link to="/MainRegister "><button style={{marginTop: "40px", width: "100px", height: "40px", fontFamily: "serif", backgroundColor: "#66023b", color: "white"}}>Join Us</button></Link>
                </div>
            </div>

        </div>
     
    </div>
  );
}

export default Certificate;