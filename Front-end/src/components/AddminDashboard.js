    import React, { useState,useEffect } from 'react';
    import Tabs from '@mui/material/Tabs';
    import Tab from '@mui/material/Tab';
    import TasksList from './CourseList';
    import EnquiryList from './EnquiryList';
    import axios from 'axios';
import ContactList from './ContactList';
import HireUsList from './HireFromList';
import ApplyNowList from './ApplyNowList';
import Adminav from './Adminav';
import TryUI from '../pages/Courses/TryUI';
// import { Button } from '@mui/material';
// import { Button, Modal } from 'react-bootstrap';
import { Modal ,Button, IconButton, Typography} from '@mui/material';
import AddCourses from './AddCourses';
import "./AddCourses.css";
import AdminTryUI from './AdminTryUI';
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import CloseIcon from "@mui/icons-material/Close";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Box } from '@mui/system';
import ServiceList from './ServiceList';
import Addcategory from './AddCategory';
import CategoryList from './CategoryList';

function AddminDashboard() {
        const navigate = useNavigate();
        const [anchorElNav, setAnchorElNav] = useState(null);
        const [selectedTab, setSelectedTab] = useState(0);
            const [updateUI, setUpdateUI] = useState(false);
            const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling the modal
            const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);
            const [isUserFormOpen, setIsUserFormOpen] = useState(false);
            const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
            
            const isAuthenticated = sessionStorage.getItem("authenticated") === "true";



            useEffect(() => {
              if (!isAuthenticated) {
                navigate('/');
              }
            }, [isAuthenticated, navigate]);
            
         
            // Fetch task list data whenever updateUI changes
            useEffect(() => {
            const fetchData = async () => {
                try {
                // Make the API call to fetch the updated task list data
                const response = await axios.get('http://localhost:5000/courses');
                // Handle the fetched data, e.g., update the state or Redux store
                // Here, I assume the response data is an array of tasks
                // Replace 'setTasks' with the actual state update function to store the tasks
                // setTasks(response.data);
                console.log("Updated task list:", response.data);
                } catch (error) {
                console.error("Failed to fetch task list:", error);
                }
            };
        
            fetchData(); // Call the fetch function
            }, [updateUI])

    
        const handleTabChange = (event, newValue) => {
        setSelectedTab(newValue);
        
        };
       
    //logout
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
      
      // Clear session data
      sessionStorage.removeItem("authenticated");
      
      // Redirect to home page
      navigate("/"); 
    };

      const openModal = () => {
        setIsModalOpen(true);
      };
      
      const openCategoryModal = () => {
        setIsCategoryModalOpen(true);
      };
      
      const closeModal = () => {
        setIsModalOpen(false);
        setIsCategoryModalOpen(false);
      };
          const handleCloseNavMenu = () => {
            setAnchorElNav(null);
          };
          
          const containerStyle={
            backgroundsize:'cover',
            backgroundRepeat:'no-repeat',
          
            backgroundColor:'#d3e3e3'
          }
        return (
        <div>
           <div className="App" style={containerStyle} >
            {/* <Adminav/> */}
            <AdminTryUI  text={"Admin Management"}/>
           
            <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white",position:'relative',bottom:'10rem' }}
                component="a"
                href="/"
              >
                Home 
              </Button>
              <Button
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white",position:'relative',bottom:'10rem',right:'1rem' }}
                component="a"
                href="/course"
              >
               / courses
              </Button>
              <h5
  style={{
    display: 'flex', // Adding flex display to align icon and text
    alignItems: 'center', // Aligning items vertically
    justifyContent: 'flex-end', // Aligning content to the right
    cursor: 'pointer',// Adding cursor style to indicate interactivity
    position :'relative',
    right:'2.3rem',
    top:'0.9' ,  
    bottom:'14rem',
    color:"white"
  }}
  onClick={handleLogoutConfirmationOpen}
>
  <LockIcon style={{ marginRight: '5px' ,color:'white'}} /> {/* Adding margin to the icon */}
  Logout
</h5>
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
          {/* <Typography variant="h5" component="div">
            User Form
          </Typography>
          <IconButton
            onClick={handleCloseUserForm}
            sx={{ position: "absolute", top: 0, right: "10px" }}
          >
            <CloseIcon />
          </IconButton> */}

      
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
            {/* <Button variant="outlined" style={{ fontSize: "15px", fontWeight: "bold", position: "relative", left: "62rem",bottom:"14rem", background: '#f5d3e6',color:'black',fontFamily:'serif',}} onClick={openModal} >
             AddCourse
              </Button> */}
              {/* <Button variant="outlined" style={{ fontSize: "15px", fontWeight: "bold", position: "relative", left: "43.7rem",bottom:"14rem", background: '#f5d3e6',color:'black',fontFamily:'serif',}}  onClick={openCategoryModal} >
             AddCategory
              </Button> */}
             
            <Tabs value={selectedTab} onChange={handleTabChange} centered style={{background:'#408687',color:'white',position:'relative',top:'-12rem'}}>
            <Tab label="CourseManagement" style={{color:'white'}} />
            <Tab label="View Catogory" style={{color:'white'}} />
            <Tab label="EnquiryNow" style={{color:'white'}} />
            <Tab label="ApplyNow" style={{color:'white'}} />
            <Tab label="HireFrom_us"style={{color:'white'}}  />
            <Tab label="Contact" style={{color:'white'}} />
            <Tab label="Service_Management" style={{color:'white'}} />
            </Tabs>

    {/* <HomeCrud/> */}
            {/* Content for each tab */}
            
            {selectedTab === 0 && <div style={{paddingLeft:"10%",position:'relative',bottom:'13.7rem'}}><TasksList  updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 1 && <div  style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><CategoryList updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 2 && <div  style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><EnquiryList updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 3 && <div  style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><ApplyNowList updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 4 && <div  style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><HireUsList updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 5 && <div  style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><ContactList updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}
            {selectedTab === 6 && <div style={{paddingLeft:"10%",position:'relative',bottom:'15rem'}}><ServiceList updateUI={updateUI} setUpdateUI={setUpdateUI} /></div>}

            <Modal open={isModalOpen} onClose={closeModal}>
  <div className="modal-cont">
    <AddCourses onCloseModal={closeModal} />
  </div>
</Modal>
<Modal open={isCategoryModalOpen} onClose={closeModal}>
  <div className="modal-cont">
    <Addcategory onCloseModal={closeModal} />
  </div>
</Modal>
        </div>
        </div>
        );
    }
    
    export default AddminDashboard;