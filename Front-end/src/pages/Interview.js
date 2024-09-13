import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomeStyles.css"; // Import CSS file for styling
import Banner from "../images/person-front-computer-working-html.jpg";
import Banner1 from "../images/html-css-collage-concept-with-person.jpg";
import { Grid, Typography } from "@mui/material";
import logo from "../images/Pricol_logo.png";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo1 from "../images/Pricol_logo.png";

const Interview = () => {
  const interviewEvents = [
    {
      id: 1,
      logo: logo,
      image: Banner,
      date: "July 10, 2023",
      time: "10:00 AM - 11:30 AM",
      role: "Front-end Developer",
      location: "Pricol Limited, Coimbatore",
      applyRoute: "/MainRegister",
    },
    {
      id: 2,
      logo: logo1,
      image: Banner1,
      date: "July 15, 2023",
      time: "2:00 PM - 3:30 PM",
      role: "Back-end Developer",
      location: "Pricol Limited, Coimbatore",
      applyRoute: "/MainRegister",
    },
    {
      id: 3,
      logo: logo,
      image: Banner,
      date: "July 20, 2023",
      time: "9:30 AM - 11:00 AM",
      role: "Full Stack Developer",
      location: "Pricol Limited, Coimbatore",
      applyRoute: "/MainRegister",
    },
  ];

  const openGoogleMaps = (location) => {
    const encodedLocation = encodeURIComponent(location);
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodedLocation}`);
  };

  return (
    <>
      <Grid container spacing={2} sx={{ py: 4 }} style={{position:'relative',bottom:'12rem'}}>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "600",
              textAlign: "center",
              alignItems: "center",
              color: "#66023b",
              fontFamily: "serif",
             
            }}
          >
            Interview schedule
          </Typography>
        </Grid>
        {interviewEvents.map((event) => ( 
          <Grid item xs={12} md={4} key={event.id}>
            <div className="interview-card">
              <img className="interview-image" src={event.image} alt="Interview" />
              <div className="interview-details">
                <div className="interview-logo">
                  <img
                    style={{ width: "6rem", height: "6rem", marginBottom: "1rem" }}
                    src={event.logo}
                    alt="Company Logo"
                  />
                </div>
                <p className="interview-date">
                  <b>Date:</b> {event.date}
                </p>
                <p className="interview-time">
                  <b>Time:</b> {event.time}
                </p>
                <p className="interview-role">
                  <b>Role:</b> {event.role}
                </p>
                <Link to={event.applyRoute}>
                  <button className="apply-button">Apply Now</button>
                </Link>
                <abbr title="Location">
                  <LocationOnIcon
                    className="location-icon"
                    onClick={() => openGoogleMaps(event.location)}
                  />
                </abbr>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Interview;
