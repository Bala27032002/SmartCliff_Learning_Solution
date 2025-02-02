import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../styles/HomeStyles.css";
// import { Title } from "../common/title/Title";

export default class Testimonials extends Component {
  render() {
    return (
      <>
               

      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >

        <div>
        <img src={require('../images/Bala1 (2).jpg')} />
          <div className="myCarousel">
            <h3>SRI RAM</h3>
            <h4>Front_end Devlopment</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src={require('../images/Bala1 (2).jpg')} />
          <div className="myCarousel">
            <h3>SURYA</h3>
            <h4>Front_end Devlopment</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
        <img src={require('../images/Bala1 (2).jpg')} />
          <div className="myCarousel">
            <h3>HARI</h3>
            <h4>Full Stack Development</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
      </>
    );
  }
}