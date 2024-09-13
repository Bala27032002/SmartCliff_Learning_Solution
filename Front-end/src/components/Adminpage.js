// import React, { useEffect, useState } from "react";
// // import Navbar from "../components/Navbar";
// import AddTask from "../components/AddTask";
// import Container from "react-bootstrap/Container";
// import { Row, Col } from "react-bootstrap";
// // import TasksList from "../components/TasksList";
// import axios from 'axios';
// import TryUI from "../pages/Courses/TryUI";
// import Layout from "./Layout/Layout";
// // import EnquiryList from "./EnquiryList";
// // import AddminDashboard from "./AddminDashboard";
// import Adminav from "./Adminav";

// function Adminpage() {
//   const [updateUI, setUpdateUI] = useState(false);
//    // Fetch task list data whenever updateUI changes
//    useEffect(() => {
//     const fetchData = async () => {
//       try {
//         // Make the API call to fetch the updated task list data
//         const response = await axios.get('http://localhost:5000/tasks');
//         // Handle the fetched data, e.g., update the state or Redux store
//         // Here, I assume the response data is an array of tasks
//         // Replace 'setTasks' with the actual state update function to store the tasks
//         // setTasks(response.data);
//         console.log("Updated task list:", response.data);
//       } catch (error) {
//         console.error("Failed to fetch task list:", error);
//       }
//     };

//     fetchData(); // Call the fetch function
//   }, [updateUI]); // Run the effect whenever updateUI changes

//   return (
//     <>
//     {/* <Adminav/> */}
//     {/* <TryUI text={"Admin Page"}/> */}
//        {/* <TryUI  text={"Course Management"}/> */}
//       {/* <Navbar /> */}
//       <Row className="justify-content-md-center" >
//         <Col  lg="6">
//         {/* <AddTask setUpdateUI={setUpdateUI} /> */}
     
//           {/* <TasksList updateUI={updateUI} setUpdateUI={setUpdateUI} /> */}
//           {/* <EnquiryList updateUI={updateUI} setUpdateUI={setUpdateUI} /> */}
//         </Col>
//       </Row>
//       <div>
//       {/* <AddminDashboard/> */}
//       </div>
//       </>
 
//   )
// }

// export default Adminpage