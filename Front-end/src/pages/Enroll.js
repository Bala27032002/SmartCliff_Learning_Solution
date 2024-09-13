import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/HomeStyles.css";
import { Link } from "react-router-dom";

function Enroll() {
  return (
    <div className="container-fluid mb-2 pb-3" style={{}}>
      <div className="row justify-content-center">
        <div className="card col-lg-6 p-4" style={{ boxShadow: " 0 0 10px rgba(0, 0, 0, 0.2)", background: "linear-gradient(rgb(255 255 255) 0%, rgba(219,204,236,1) 100%, rgba(0,212,255,1) 100%)", height: "370px" }}>
          <h4 className="text-center my-4" style={{ fontFamily: "serif", color: "#442260" }}>Enroll Now</h4>
          <div className="row">
            <h6 style={{ fontFamily: "serif", color: "#442260" }}>Register for a Free Account</h6><br /><br />
            <h4 style={{ fontFamily: "serif", color: "#de8c7e" }}>
              Enroll for an<br />
              incredible<br />
              learning<br />
              experience!
            </h4>
            <br /><br />
            <div className="row text-center justify-content-center mt-4">
              <Link to="/register" onClick={() => window.scrollTo(0, 0)}> <button className="pulse-effect" style={{ width: "100px", height: "40px", backgroundColor: "#442260", border: "none", color: "white" }}>Enroll</button></Link>
            </div>
          </div>
        </div>
        <div className="col-lg-6 justify-content-end">
          <img
            src="https://th.bing.com/th/id/OIP.MlPt8GXwlbCuJIFWJpgW7gHaE8?pid=ImgDet&rs=1"
            className="w-100 img-fluid"
            style={{ height: "370px", boxShadow: " 0 0 10px rgba(0, 0, 0, 0.2)" }}
            alt="Enrollment"
          />
        </div>
      </div>
    </div>
  );
}

export default Enroll;
