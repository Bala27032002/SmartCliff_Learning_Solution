import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import $ from "jquery";
import "../../../src/styles/footer.css";


function Footer() {
  var home = ["Home", "About Us", "Courses", "Services", "Placement","Contact"];
  var support = ["Terms & Conditions", "Privacy Policy", "Faq's"];
  var programs = [
    "Programming Languages",
    "Embedded Software",
    "Software Testing",
    "Analytics",
  ];
  var information = [
    "Email: enquiry@smartcliff.in",
    "Phone No: +91811 007 7033",
    "+91811 007 5700",
    "2000, Krishna Colony(opp. to Central Studio)Ramanathapuram",
    "Trichy Road Coimbatore-641 005",
  ];

  const [mail1, setmail1] = useState("");

  function Handleevent(event) {
    $(".error").remove();

    if (mail1.length < 1) {
      $("#ss").after(
        '<span class="error" style="color:red;" >*This field is required</span>'
      );
    } else {
      var regEx = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
      var validEmail = regEx.test(mail1);
      if (!validEmail) {
        $("#ss").after(
          '<span class="error" style="color: red;">*Invalid</span>'
        );
      }
    }
    event.preventDefault();
  }

  return (
    <div className="container-fluid" style={{ position: "relative" }}>
      <form onSubmit={Handleevent}>
        <div
          className="container-fluid"
          style={{ backgroundColor: "#66023b", height: "60px" }}
        >
          <div className="row py-4 d-flex justify-content-between">
            <div className=" col-6 d-flex col-lg-6 justify-content-lg-start">
              <div className="d-block">
                <input
                  type="text"
                  className="img-fluid"
                  placeholder="Your Email Address"
                  onChange={(e) => {
                    setmail1(e.target.value);
                  }}
                  style={{
                    width: "280px",
                    position:'relative',
                    bottom:'0.8rem',
                    borderRadius:'1rem',
                    height: "38px",
                    backgroundColor: "white",
                    color: "black",
                    border: "none",
                    fontFamily: "sans-serif"

                  }}
                />
                <p id="ss"></p>
              </div>
              <button
                type="submit"
                className="img-fluid"
                style={{ width: "100px", height: "30px",border: "none",color: "white",backgroundColor: "#66023b",fontFamily: "sans-serif",borderRadius:'1rem',position:'relative',bottom:'0.5rem',right:'6.5rem'}}
              >
                Subscribe
              </button>
            </div>

            {/* <div className=" col-12 col-lg-2 d-flex justify-content-between align-content-right">
              <div>
                {" "}
                <img src={instagram} width="28" height="28" style={{position:'relative',bottom:'0.3rem'}}/>
              </div>
              <div>
                <img src={facebook} width="28" height="28" style={{position:'relative',bottom:'0.3rem',right:'0.5rem'}} />
              </div>
              <div>
                <img src={twitter} width="40" height="40"  style={{position:'relative',bottom:'0.7rem',right:'1rem'}} />
              </div> 
             </div>  */}
          </div>
        </div>
      </form>

      <div
        className="container-fluid py-4"
        style={{
          background: "linear-gradient(rgb(255 255 255) 0%, rgba(219,204,236,1) 100%, rgba(0,212,255,1) 100%)",
          color: "#f7eee3",
        }}
      >
        <div className="row" style={{ height:"100%" }}>
          <div className="col-6 col-md-3 col-lg-3">
            <p style={{ color: "black",fontFamily: "sans-serif" }}>
              <b>QUICK LINK</b>
            </p>
            {home.map((a) => {
              return <p style={{ color: "black",fontFamily: "sans-serif",fontSize:'13px'}}>{a}</p>;
            })}
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <p style={{ color: "black",fontFamily: "sans-serif" }}>
              <b>SUPPORT</b>
            </p>
            {support.map((a) => {
              return <p style={{ color: "black",fontFamily: "sans-serif" ,fontSize:'13px'}}>{a}</p>;
            })}
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <p style={{ color: "black",fontFamily: "sans-serif" }}>
              <b>PROGRAMS</b>
            </p>
            {programs.map((a) => {
              return <p style={{ color: "black",fontFamily: "sans-serif",fontSize:'13px' }}>{a}</p>;
            })}
          </div>

          <div className="col-6 col-md-3 col-lg-3">
            <p style={{ color: "black",fontFamily: "sans-serif", }}>
              <b>COMPANY INFORMATION</b>
            </p>
            {information.map((a) => {
              return <p style={{ color: "black",fontFamily: "sans-serif" ,fontSize:'13px'}}>{a}</p>;
            })}
          </div>
        </div>

        <div className="row pt-4">
          {/* <div
            className="col-6 col-lg-5"
            style={{ justifyContent: "start", textAlign: "left" }}
          >
            <small style={{ color: "black",fontFamily: "sans-serif" }}>
              2000, Krishna Colony(opp. to Central Studio)Ramanathapuram
              <span> - </span>
              <br />
              Trichy Road Coimbatore<span> - </span>641 005
            </small>
          </div> */}

          <div
            className="col-6 col-lg-7"
            style={{
              position:'relative',
              marginLeft:'18rem',
              alignItem:'center',
              textAlign: "center",
            }}
          >
            {/* <small style={{ color: "black",fontFamily: "sans-serif",fontSize:'13px' }}>
              copyrights @2023 SmartCliff<span> - </span>
              All Rights Reserved
            </small> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;