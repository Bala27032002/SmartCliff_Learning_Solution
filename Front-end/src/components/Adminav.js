import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import CloseIcon from "@mui/icons-material/Close";
import AdbIcon from "@mui/icons-material/Adb";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Logo from "../components/Layout/unnamed.png";
// import User from "./User";
import Modal from "@mui/material/Modal";
import LockIcon from "@mui/icons-material/Lock";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Adminav() {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElCourses, setAnchorElCourses] = useState(null);
  const [isUserFormOpen, setIsUserFormOpen] = useState(false);
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);

  const settings = ["User", "Admin"];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleOpenCoursesMenu = (event) => {
    setAnchorElCourses(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleCloseCoursesMenu = () => {
    setAnchorElCourses(null);
  };

  const handleOpenUserForm = () => {
    setIsUserFormOpen(true);
    handleCloseUserMenu();
  };

  const handleCloseUserForm = () => {
    setIsUserFormOpen(false);
  };

  const handleLogoutConfirmationOpen = () => {
    setLogoutConfirmationOpen(true);
  };

  const handleLogoutConfirmationClose = () => {
    setLogoutConfirmationOpen(false);
  };

  const handleLogout = () => {
    handleLogoutConfirmationClose();
    navigate("/");
  };

  return (
    
    <AppBar position="sticky">
      <Container
        maxWidth="xl"
        sx={{ background:"white", color:'#66023b'}}
      >
        <Toolbar disableGutters>
          {/* <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} /> */}
          <Typography
              
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              <img src={Logo} alt="logo" height={50} width="180" />
            </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography textAlign="center" style={{color:'#66023b'}}>Home</Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              flexGrow: 1,
            }}
          >
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
                alignItems: "center",
                marginRight: "8rem",
              }}
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#66023b", display: "block", mr: 2, }}
                component="a"
                href="/"
              >
                Home
              </Button>
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "#66023b", display: "block", mr: 2 }}
                component="a"
                href="/course"
              >
                courses
              </Button>
              <Menu>
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              </Menu>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElCourses}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElCourses)}
                onClose={handleCloseCoursesMenu}
              >
                <MenuItem onClick={handleCloseCoursesMenu}>
                  <Typography textAlign="center">
                    Frontend Development
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseCoursesMenu}>
                  <Typography textAlign="center">
                    Backend Development
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseCoursesMenu}>
                  <Typography textAlign="center">Full Stack</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseCoursesMenu}>
                  <Typography textAlign="center">Core Java</Typography>
                </MenuItem>
                <MenuItem onClick={handleCloseCoursesMenu}>
                  <Typography textAlign="center">Core Python</Typography>
                </MenuItem>
              </Menu>
            </Box>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={
                    setting === "User" || setting === "Admin"
                      ? handleOpenUserForm
                      : handleCloseUserMenu
                  }
                >
                  <Typography textAlign="center">
                    {setting === "User" ? (
                      <>
                        <AccountBoxIcon sx={{ marginRight: "4px" }} />
                        User
                      </>
                    ) : (
                      <>
                        <LockIcon sx={{ marginRight: "4px" }} />
                        Admin
                      </>
                    )}
                  </Typography>
                </MenuItem>
              ))}
              <MenuItem
                onClick={handleLogoutConfirmationOpen}
                sx={{ borderTop: "1px solid #ddd", paddingTop: "10px" }}
              >
                <Typography textAlign="center">Logout</Typography>
              </MenuItem>
            </Menu>
            <IconButton
              color="inherit"
              onClick={handleLogoutConfirmationOpen}
              sx={{ ml: 2 }}
            >
              <LockIcon />
              Logout
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
      <Modal open={isUserFormOpen} onClose={handleCloseUserForm}>
        <Box
          sx={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "90%",
            maxHeight: "90%",
            width: "400px",
            height: "400px",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "4px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" component="div">
            User Form
          </Typography>
          <IconButton
            onClick={handleCloseUserForm}
            sx={{ position: "absolute", top: 0, right: "10px" }}
          >
            <CloseIcon />
          </IconButton>

      
        </Box>
      </Modal>
      <Dialog
        open={logoutConfirmationOpen}
        onClose={handleLogoutConfirmationClose}
      >
        <DialogTitle>Logout Confirmation</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Are you sure you want to logout?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleLogoutConfirmationClose}>Cancel</Button>
          <Button onClick={handleLogout} color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </AppBar>
  );
}

export default Adminav;