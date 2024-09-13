import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'; // Assuming you're using React Bootstrap
import Banner from "../../../images/hire1.png";
import Banner1 from "../../../images/htd2.png";
import { Link } from 'react-router-dom';
const Htd1 = () => {
  return (
    <Container>
      {/* <Row className="justify-content-center">
        <h3 style={{ fontWeight: 700,color:'#66023b',position:'relative',textAlign:'center'}}>
          Take a proactive approach to recruitment:<br></br> HIRE–TRAIN–DEPLOY
        </h3>
      </Row> */}
      <br />
      {/* <Row className="justify-content-center">
        <h5 style={{ textAlign: 'center',textAlign:'justify',fontWeight:'400',position:'relative',padding:'0rem  10rem', }}>
          The Hire-Train-Deploy model is a strategic approach to talent sourcing, training, and deploying. Our experienced hiring consultants shortlist and train candidates to develop niche-specific skills suitable for specific job roles. This model bridges the gap between business requirements and candidate skills.
        </h5>
      </Row><br></br> */}
      <Row className="justify-content-center" style={{position:'relative'}}>
        <Col xs={6} md={3}>
          <div style={{ textAlign: 'center' }}>
            <img src= {Banner} alt="Frame-4"  width="500rem" height="500rem" style={{position:'relative',right:'12rem'}} />
            <p style={{fontSize:'1.7rem',color:'white',fontWeight:'700',fontFamily:'serif',textAlign:'justify',position:'relative',
          bottom:'20rem',right:'9rem'
          }}>Fastest recruitment<br />process <span style={{position:'relative',right:'2.7rem'}}>to</span><span style={{position:'relative',right:'5.5rem'}}> hire</span> resources</p>
            <Link to="/Hireus">
            <button style={{position:'relative',
          bottom:'17rem',right:'15rem',height:'3rem',width:'7rem',borderRadius:'0.3rem',background:'white',color:'#66023b'}}>Hire Talent</button>
          </Link> {/* Assuming you want a button */}
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div style={{ textAlign: 'center' }}>
            <img src= {Banner1} alt="Frame-8" width="500rem" height="500rem" style={{position:'relative',left:'2rem'}}/>
            <p style={{fontSize:'1.7rem',color:'white',fontWeight:'700',fontFamily:'serif',textAlign:'justify',position:'relative',
          bottom:'22rem',left:'5rem'
          }}>Explore<br />Hire-Train-Deploy Opportunities</p>
           <Link to="/Hireus">
            <button style={{position:'relative',
          bottom:'19rem',right:'1rem',height:'3rem',width:'7rem',borderRadius:'0.3rem',background:'white',color:'#66023b'}}>Hire Talent</button>
          </Link> {/* Assuming you want a button */} {/* Assuming you want a button */}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Htd1;
