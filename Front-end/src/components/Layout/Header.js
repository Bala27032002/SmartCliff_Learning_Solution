import React, { useState } from "react";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  Button,
  IconButton,
  MenuItem,
  Select,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";

import Logo from "../../../src/images/smartlogo.png";
import WidgetsIcon from '@mui/icons-material/Widgets';
import { NavLink, useNavigate } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { NavDropdown } from "react-bootstrap";
import EnquiryForm from "../../pages/EnquiryForm";
import ApplyNowModal from "../Modal/ApplyNowModal";


const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [courseDropdownValue, setCourseDropdownValue] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate(); 

  // Handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Handle course dropdown change
  const handleCourseDropdownChange = (event) => {
    const selectedValue = event.target.value;
    setCourseDropdownValue(selectedValue);

    // Route to About Us page

  };

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Menu drawer
  const isMobile = useMediaQuery("(max-width: 1200px)");
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: isMobile ? "white" : "transparent",
        color: isMobile ? "black" : "white",

      }}
    >
      <Typography

        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <img src={Logo} alt="logo" height={70} style={{ maxWidth: "250px" }} />
      </Typography>
      <span>


      </span>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink style={{ fontSize: '20px' }} activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink style={{ fontSize: '20px' }} to={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink style={{ color: '#66023b', fontWeight: '500', textDecoration: 'none' }} className="active-underline" activeClassName="active" to={"/course"}>
            Course
          </NavLink>
        </li>
        <li>
          <Select
            value={courseDropdownValue}
            onChange={handleCourseDropdownChange}
            displayEmpty
            sx={{
              color: "#66023b",
              fontWeight: "bold",
              fontSize: '18px',
              textDecoration: "none", // Text decoration for dropdown
              gap: "1px", // Gap between items
              "& ul": {
                paddingInlineStart: 0,
              },
            }}
          >
            <MenuItem value="" disabled>
              Services
            </MenuItem>
            <MenuItem>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to={"/htd"}>HTD</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to={"/Mca"}>MCA</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to={"/Institutional"}>Institutional training</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to={"/lateral"}>Lateral training</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink style={{ textDecoration: 'none', color: 'black' }} to={"/intership"}>Intership</NavLink>
            </MenuItem>
          </Select>



        </li>
        {/* <li>
          <NavLink to={"/services"}>Services</NavLink>
        </li> */}
        <li>
          <NavLink to={"/placement"}>Placement</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to="/Register">
            <Button sx={{
              background: "#66023b",
              color: "white",
              marginLeft: "1rem",
              "&:hover": {
                background: "white", color: '#66023b'
              }
            }}>
              Log in
              <LoginIcon />
            </Button>
          </NavLink>
          <NavLink >
            <Button
              sx={{
                background: "#66023b",
                color: "white",
                marginLeft: "1rem",
                "&:hover": {
                  background: "white", color: '#66023b'
                },
              }} onClick={openModal}
            >
              Apply Now
              <HowToRegIcon />
            </Button>

          </NavLink>
          <ApplyNowModal open={isModalOpen} handleClose={closeModal} />

        </li>
      </ul>
    </Box>

  );

  return (
    <>

      <Box>
        <AppBar
          component="nav"
          sx={{
            bgcolor: "white", // Change the navbar color here
          }}
        >
          <Toolbar>
            {isMobile && (
              <IconButton
                aria-label="open drawer"
                edge="start"
                sx={{
                  mr: 2,
                  color: "black",
                }}
                onClick={handleDrawerToggle}
              >
                <WidgetsIcon />
              </IconButton>
            )}
            <Typography

              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={70} width="250" />
            </Typography>
            <Box sx={{ display: isMobile ? "none" : "block" }} className="nav">
              <ul className="navigation-menu">
                <li>
                  <NavLink style={{ color: '#66023b', fontWeight: '600' }} className="active-underline" activeClassName="active" to={"/"}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink style={{ color: '#66023b', fontWeight: '600' }} className="active-underline" activeClassName="active" to={"/about"}>
                    About
                  </NavLink>
                </li>
                <li>

                  <NavLink style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} className="active-underline" activeClassName="active" to={"/course"}>
                    Course
                  </NavLink>

                  <Select
                    value={courseDropdownValue}
                    onChange={handleCourseDropdownChange}
                    displayEmpty
                    sx={{
                      color: "#66023b",
                      fontWeight: "bold",
                      textDecoration: "none", // Text decoration for dropdown
                      gap: "10px", // Gap between items
                      "& ul": {
                        paddingInlineStart: 0,
                      },
                    }}

                  >
                    <MenuItem style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} value="" disabled>
                      Services
                    </MenuItem>
                    <MenuItem>
                      <NavLink className="active-underline" activeClassName="active" style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} to={"/htd"}>HTD</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink className="active-underline" activeClassName="active" style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} to={"/Mca"}>MCA</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink className="active-underline" activeClassName="active" style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} to={"/Institutional"}>Institutional training</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink className="active-underline" activeClassName="active" style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} to={"/lateral"}>Lateral training</NavLink>
                    </MenuItem>
                    <MenuItem>
                      <NavLink className="active-underline" activeClassName="active" style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} to={"/intership"}>Intership</NavLink>
                    </MenuItem>


                  </Select>

                </li>
                <li>
                  <NavLink className="active-underline" activeClassName="active" style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} to={"/placement"}>Placement</NavLink>
                </li>
                <li>
                  <NavLink className="active-underline" activeClassName="active" style={{ color: '#66023b', fontWeight: '600', textDecoration: 'none' }} to={"/contact"}>Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/Register">
                    <Button sx={{
                      background: "#66023b",
                      color: "white",
                      marginLeft: "1rem",
                      "&:hover": {
                        background: "white", color: '#66023b'
                      }
                    }}>
                      Log in
                      <LoginIcon />
                    </Button>
                  </NavLink>
                  <NavLink >
                    <Button
                      sx={{
                        background: "#66023b",
                        color: "white",
                        marginLeft: "1rem",
                        "&:hover": {
                          background: "white", color: '#66023b'
                        },
                      }} onClick={openModal}
                    >
                      Apply Now
                      <HowToRegIcon />
                    </Button>

                  </NavLink>
                  <ApplyNowModal open={isModalOpen} handleClose={closeModal} />


                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: isMobile ? "block" : "none",
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>

    </>
  );
};

export default Header;
