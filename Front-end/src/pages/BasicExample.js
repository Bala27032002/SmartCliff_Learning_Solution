import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';

function BasicExample() {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const navLinkStyle = {
    color: 'black',
    fontSize: '15px',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    marginLeft: '50px',
    marginRight: '50px',
    textDecoration: 'none',
  };

  const navbarStyle = {
    backgroundColor: 'rgb(187, 179, 193)',
    paddingTop: '2px',
    paddingBottom: '2px',
    display: 'flex',
    alignItems: 'center',
  };

const menubarstyle={
  fontSize:"15px",
  color:"black",
}









  const dropdownMenuStyle = {
    left: 'auto',
    right: '0',
    top: '100%',
  };

  return (
    <>
    
    <Navbar bg="" expand="lg" style={navbarStyle}>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className=""  style={navLinkStyle}>
              Home
            </Nav.Link>
            <Nav.Link href="/aboutus" className="text-nowrap" style={navLinkStyle}>
              About Us
            </Nav.Link>
            <NavDropdown
              title="Courses"
              className=""
              id="basic-nav-dropdown"
              style={navLinkStyle}
              menuStyle={dropdownMenuStyle}
            >
              <NavDropdown.Item href="/programming" style={menubarstyle}>Programming Languages</NavDropdown.Item>
              <NavDropdown.Item href="/software" style={menubarstyle}>Software Testing</NavDropdown.Item>
              <NavDropdown.Item href="/embedded" style={menubarstyle}>Embedded Software</NavDropdown.Item>
              <NavDropdown.Item href="/analytics" style={menubarstyle}>Analytics</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Services"
              id="basic-nav-dropdown"
              style={navLinkStyle}
              menuStyle={dropdownMenuStyle}
            >
              <NavDropdown.Item href="/Mca" style={menubarstyle}>MCA Programmes</NavDropdown.Item>
              <NavDropdown.Item href="/institution" style={menubarstyle}>Institutional Training</NavDropdown.Item>
              <NavDropdown.Item href="/lateral" style={menubarstyle}>Lateral Training</NavDropdown.Item>
              <NavDropdown.Item href="/Htd" style={menubarstyle}>HTD Training</NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link onClick={handleShowModal} className="text-nowrap" style={navLinkStyle}>
                Enquiry
              </Nav.Link> */}
            <Nav.Link  href="/placements" className="" style={navLinkStyle}>
              Placements
            </Nav.Link>
            <Nav.Link href="/applynow" className="text-nowrap" style={navLinkStyle}>
             Apply Now
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {/* <Enquiry showModal={showModal} handleCloseModal={handleCloseModal} /> */}
    </>
  );
}

export default BasicExample;


