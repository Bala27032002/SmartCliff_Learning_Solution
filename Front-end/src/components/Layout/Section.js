import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Section() {
  return (
    <div>
      <div className="container-fluid" style={{ backgroundColor: "#442260",zIndex:'-1' }}>
        <div className="row pt-1" style={{ textAlign: "center" }}>
          <div className="col-12 col-md-5 col-lg-4">
            <div className="row">
              <div
                className="col-6 col-md-5 col-lg-4 "
                style={{ textAlign: "end" }}
              >
                <b>
                  <small style={{ color: "white", fontFamily: "serif"}}>
                    enquiry@smartcliff.in
                  </small>
                </b>
              </div>

              <div
                className="col-6 col-md-7 col-lg-7"
                style={{ textAlign: "center" }}
              >
                <b>
                  {" "}
                  <small style={{ color: "white", fontFamily: "serif"}}>
                    +91 811 007 7033
                  </small>
                </b>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 text-end">
            <div className="row ">
              <div
                className="col-4 col-md-4 col-lg-8 text-end">
                <b>
                  <small style={{ color: "white", fontFamily: "serif"}}>
                    Admission
                  </small>
                </b>
              </div>
              <div
                className="col-4 col-md-4 col-lg-2">
                <b>
                 <Link to="/Register" style={{textDecoration: "none"}}> <small style={{ color: "white", fontFamily: "serif"}}>
                    Apply now
                  </small></Link>
                </b>
              </div>
              <div
                className="col-4 col-md-4 col-lg-2">
                <b>
                  {" "}
                  <small style={{ color: "white", fontFamily: "serif"}}>Enquiry</small>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
