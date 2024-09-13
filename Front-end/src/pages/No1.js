import React from 'react';
import '../styles/TabComponent.css'; // Import the CSS file for styling

function NO1() {
  return (
    <div className="container-lg" style={{position:'relative',bottom:'14rem'}}>
      <div className="row">
        <div className="cols-md-6 video-container">
          <iframe
            className="video-iframe"
            src="https://www.youtube.com/embed/G_R_HUb7r1Y?&autoplay=1"
            frameBorder="0"
            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="col-md-6 content-container">
        {/* <h4 style={{position:'relative',bottom:'8rem',textAlign:'center',justifyContent:'center',fontFamily:'serif',color:'#66023b',fontWeight:"800"}}>Hire For Most Sought-After Skills</h4> */}
          <h1 className="green-text">
            No.1 Training Institute in Coimbatore
          </h1>
          <p className="text-justify">
            Being the best software institute in Coimbatore, you can completely
            rely on us. We train students and support them in achieving a niche
            in the IT industry. We teach technical as well as soft-skill
            training, reinforcing students' learning and ensuring that they are
            placed in reputed companies.
            <br />
            <br />
            Also, we offer We will offer- Internship, Online training,
            Corporate training, One on one training, 100% Job placement and
            assurance.
          </p>
          <br />
        </div>
      </div>
    </div>
  );
}

export default NO1;
