import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img2 from "../../images/Aosta_Logo.png";
import img3 from "../../images/Aosta_Logo.png";
import img4 from "../../images/Aosta_Logo.png";
// ... import other company logo images
const CompanyLogoCarousel = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  
    return (
      <div style={{ width: '50rem', margin: '0 auto' }}>
        <Slider {...settings}>
          <div>
            <img src={img2} alt="Company Logo 1" style={{ height: '10rem', width: '100%' }} />
          </div>
          <div>
            <img src={img3} alt="Company Logo 2" style={{ height: '10rem', width: '100%' }} />
          </div>
          <div>
            <img src={img4} alt="Company Logo 3" style={{ height: '10rem', width: '100%' }} />
          </div>
          {/* Add more divs for additional company logos */}
        </Slider>
      </div>
    );
  };
export default CompanyLogoCarousel;