// import React, { useEffect, useState } from "react";
// import { Button } from "@mui/material";
// import { Typography } from "@mui/material";
// import { Card, Container } from "react-bootstrap";
// import { CardContent, CardMedia, CardActions } from "@mui/material";
// import { Link } from "react-router-dom";
// import { ImageListItem, ImageList } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { getTasksFromServer } from "../slices/tasksSlice";
// import Layout from "../components/Layout/Layout";
// import TryUI from "../pages/Courses/TryUI";
// import CourseTryui from "./CourseTryui";
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";


// const Reduxcourse = () => {
//   const { tasksList } = useSelector((state) => state.tasks);
//   const dispatch = useDispatch();
//   const [selectedCategory, setSelectedCategory] = useState("Software Development");
//   const [filteredTasks, setFilteredTasks] = useState([]);

//   useEffect(() => {
//     dispatch(getTasksFromServer());
  
//     // Filter the tasks based on the selected category
//     const filtered = tasksList.filter(task => task.category === selectedCategory);
//     setFilteredTasks(filtered.map(task => ({ ...task, favoriteCount: 0 })));
//   }, [dispatch, selectedCategory, tasksList]);

//   const categories = [
//     "SOFTWARE DEVELOPMENT",
//     "AUTOMOTIVE EMBEDDED",
//     "TESTING TRACK",
//     "MECHANICAL DESIGN",
//   ];

//   const handleCategoryFilter = (category) => {
//     setSelectedCategory(category);
//   };

//   const handleDownloadSyllabus = () => {
//     const input = document.getElementById("corss");
    
//     html2canvas(input).then((canvas) => {
//       const imgData = canvas.toDataURL("image/png");
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, "PNG", 0, 0);
//       pdf.save("syllabus.pdf");
//     });
//   };
  

//   const handleFavoriteClick = (taskId) => {
//     setFilteredTasks(prevTasks => {
//       return prevTasks.map(task => {
//         if (task.id === taskId) {
//           return { ...task, favoriteCount: task.favoriteCount + 1 };
//         }
//         return task;
//       });
//     });
//   };

//   return (
//     <Layout>
//       <CourseTryui/>
//       <Container fluid id="corss">
//         <div style={{ marginBottom: "-70px", position: 'relative', bottom: '7rem' }}>
//           {categories.map((category) => (
//             <Button
//               key={category}
//               variant={selectedCategory === category ? "contained" : "outlined"}
//               color="primary"
//               onClick={() => handleCategoryFilter(category)}
//               style={{ background: '#66023b', color: 'white', margin: '46px', position: 'relative', bottom: '3rem', left: '3rem' }}
//             >
//               {category}
//             </Button>
//           ))}
//         </div>
//         <ImageList sx={{ width: "100%", marginBottom: '20px' }} cols={3} gap={16}>
//           {filteredTasks.map((task) => (
//             <ImageListItem key={task.id} sx={{ width: '100%', height: 'auto', marginBottom: '20px' }}>
//               <Card sx={{ width: '100%', height: '100%' }} key={task.id}>
//                 <CardMedia>
//                   <img src={task.url} alt="Course" style={{ width: '100%', height: '240px', objectFit: 'cover' }} />
//                 </CardMedia>
//                 <CardContent>
//                   <Typography gutterBottom variant="body1" component="div">
//                     <b style={{ fontWeight: '1000', fontSize: "1.5rem", fontFamily: 'serif' }}>{task.coursesName}</b>
//                   </Typography>
//                   <Typography gutterBottom variant="body1" component="div" textAlign="justify" style={{ color: '#949292' }}>
//                     {task.description}
//                   </Typography>
//                   <span><Link style={{ color: '#949292' }}>Know More<ArrowRightAltIcon /></Link></span>

//                   <div className="icon-wrapper">
//                     <hr></hr>
//                     <img style={{ width: '2rem', position: 'relative', top: '1rem', left: '0.5rem' }} src="https://smartcliff.in/assets/images/duration.png" alt="In-depth Practical Training" />
//                     <span style={{ fontSize: "1rem", position: 'relative', left: '1rem', fontWeight: '600', color: "#f2775e", top: '0.5rem' }}>Duration<br /><span style={{ color: '#949292', position: 'relative', left: '2rem', bottom: '0.5rem ' }}> {task.duration}</span></span>
//                   </div>
//                 </CardContent>
//                 <CardActions>
//                 <Button
//   size="small"
//   style={{ background: '#66023b', color: 'white', position: 'relative', left: '17rem', bottom: '4rem' }}
//   onClick={handleDownloadSyllabus}
// >
//   Download Syllabus
// </Button>
//                   {/* <span onClick={() => handleFavoriteClick(task.id)} style={{ cursor: "pointer", position: 'relative' }}>
//                     <FavoriteIcon style={{ left: '14rem' }} />
//                     {task.favoriteCount > 0 && <span style={{ position: 'absolute', top: '-1rem', left: '1.4rem', fontSize: '0.8rem', fontWeight: 'bold' }}>{task.favoriteCount}</span>}
//                   </span> */}
//                </CardActions>
//               </Card>
//             </ImageListItem>
//           ))}
//         </ImageList>
//       </Container>
//     </Layout>
//   );
// };

// export default Reduxcourse;
