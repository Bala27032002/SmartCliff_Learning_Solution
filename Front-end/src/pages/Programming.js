import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

import { Link } from "react-router-dom";

function Programming(props) {
  const [carouselItems, setCarouselItems] = useState([]);

//   useEffect(() => {
//     axios
//       .get("http://localhost:5000/api/getcourses?category=software development")
//       .then((response) => {
//         setCarouselItems(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching card courses:", error);
//       });
//   }, []);


  const carouselControlStyles = {
    color: "black", 
  };

  return (
    <div className="container mt-5" style={{}}>
      <div className="topic text-center">
        <h4 style={{ fontFamily: "serif",color: "#442260" }}>
          <b>GET CERTIFIED IN  SOFTWARE DEVELOPMENT</b>
        </h4>
      </div>
      <Carousel
        nextIcon={
          <span
            aria-hidden="true"
            className="carousel-control-next-icon"
            style={carouselControlStyles}
          />
        }
        prevIcon={
          <span
            aria-hidden="true"
            className="carousel-control-prev-icon"
            style={carouselControlStyles}
          />
        }
      >
        {carouselItems.map((item) => (
          <Carousel.Item key={item.id}>
            <div className="container-fluid mb-4 pb-4">
              <div className="container-fluid my-4">
                <div className="row justify-content-between">
                  <div
                    className="col-sm-6 col-lg-5 pt-4 text-center"
                    style={{
                      background: "linear-gradient(rgb(255 255 255) 0%, rgba(219,204,236,1) 100%, rgba(0,212,255,1) 100%)",
                      boxShadow:
                        "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                    }}
                  >
                    <br />
                    <br />
                    <br />
                    <h2 style={{ fontFamily: "serif",fontSize: "20px" }}>
                      <h4 style={{ color: "#442260" }}><b>Certificate in</b></h4>
                      <br />
                      <br />
                      {item.des}
                    </h2>
                    <br />
                    <br />
                    <br />
                    <Link to={item.link} onClick={() => window.scrollTo(0, 0)}>
                    <a
                      href="#"
                      className="btn btn-outline-success button"
                      style={{
                        backgroundColor: "#442260",
                        color: "#ffff",
                        boxShadow:
                          "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                        fontFamily: "serif",
                      }}
                    >
                      Discover
                    </a>
                    </Link>
                  </div>
                  <div className="col-sm-6 col-lg-7 ">
                    <img
                      src={item.imgsrc}
                      style={{
                        height: "400px",
                        backgroundColor: "#ffffff",
                        boxShadow:
                          "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
                        objectFit: "cover",
                      }}
                      className="img-fluid w-100"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Programming;

