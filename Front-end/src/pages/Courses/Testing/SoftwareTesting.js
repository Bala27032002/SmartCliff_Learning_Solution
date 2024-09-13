// import React from 'react';
// import { Button, Paper } from "@mui/material";
// import { Typography } from "@mui/material";
// import { Card, Container } from "react-bootstrap";
// import { CardContent, CardMedia, CardActions } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { getTasksFromServer } from "../../../slices/tasksSlice";
// import { useEffect } from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';

// import Layout from '../../../components/Layout/Layout';
// import TryUI from '../../../pages/Courses/TryUI';
// import FeatureList from '../../../pages/Courses/FeatureList';

// const SoftwareTesting = () => {
//     const { tasksList } = useSelector((state) => state.tasks);
//     const dispatch = useDispatch();
  
//     useEffect(() => {
//       dispatch(getTasksFromServer());
//     }, [dispatch]);
//   return (
//    <Layout>
    
//       <div className='container mb-4 pb-4 mt-1'>
        
//         <div className='container my-4'>
//           {tasksList.map((task) => (
            
//             <div className='row justify-content-between' key={task.id}>
//                 <h3>Software Testing </h3>
//               <div className='row heading' style={{ textAlign: 'center' }}>
//           <h3 style={{ fontFamily: "serif" }}><b>{task.coursesHeading}</b></h3>
//         </div>
//               <div
//                 className='col-lg-5 pt-4 text-center'
//                 style={{
//                   marginBottom:'3rem',
//                   height:'350px',
//                   boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
//                 }}
//               >
                
//                 <br />
//                 <h4
//                   style={{
//                     color: 'black',
//                     fontFamily: 'serif',
//                     fontWeight: 700,
//                     color: '#66023b',
//                     position: 'relative',
//                     bottom:'1.5rem'
//                   }}
//                   className='pb-3'
//                 >
//                   <b>{task.coursesName}</b>
//                 </h4>
//                 <h2 style={{ fontFamily: 'serif', fontSize: '20px' ,position:'relative',bottom:'1.5rem'}}>{task.description}</h2>
//                 <br />
//                 <div className="icon-wrapper" style={{position:'relative',left:'8rem'}}>
//                     <img style={{width:"1.9rem",height:'1.9rem'}} src="https://smartcliff.in/assets/images/duration.png" alt="In-depth Practical Training" /><span style={{fontSize:"1rem",position:'relative',left:'1rem',fontWeight:'600',color: "#f2775e"}}>Duration<br/><span style={{color:'black',position:'relative',left:'15px'}}>{task.duration}</span></span>
//                   </div>
//                 <Link to='/Applynow'>
//                   <button
//                     style={{
//                       marginTop: '-80px',
//                       width: '100px',
//                       height: '40px',
//                       fontFamily: 'serif',
//                       backgroundColor: '#66023b',
//                       position:'relative',
//                       right:'10rem',
//                       bottom:'2rem',
//                       color: 'white',
//                     }}
//                   >
//                     Apply Now
//                   </button>
//                 </Link>
               
               
//                 <br />
//               </div>
//               <div className='col-lg-7'>
//                 <img
//                   src={task.image}
//                   style={{
//                     height: '350px',
//                     width: '200px',
//                     boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
//                     marginBottom:'3rem',
//                   }}
//                   className='img-fluid w-100'
//                   alt={task.coursesName}
//                 />
//               </div>
//             </div>
//           ))}
          
//         </div>
//       </div>
//       </Layout>
   
//   );
// };

// export default SoftwareTesting;
