import React, { useState } from "react";
import Button from "react-bootstrap/Button";
// import { useDispatch } from 'react-redux';
import axios from 'axios'

import "./AddCourses.css";

const AddCourses = ({ onUpdateTasks }) => {
  // const dispatch = useDispatch();
  
  const [coursesName, setCoursesName] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [curl, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI,setUpdateUI] = useState(false);
  const [errors, setErrors] = useState({});

  const url = 'http://localhost:5000/tasks'

  const validateForm = () => {
    const errors = {};

    if (coursesName.trim() === "") {
      errors.coursesName = "Course Name is required";
    }

    if (description.trim() === "") {
      errors.description = "Description is required";
    }

    const durationRegex = /^[0-9]{2} [a-zA-Z]{5}$/;
    if (!durationRegex.test(duration)) {
      errors.duration = "Duration must have 2 numbers followed by 6 letters";
    }

    if (url.trim() === "") {
      errors.url = "Image URL is required";
    }

    if (category === "") {
      errors.category = "Category is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const addCourses = async(e) => {
    e.preventDefault()
    
    // console.log({coursesName,description,duration,curl,category})
    const newTask={
      tname:coursesName,
      tdesc:description,
      tduration:duration,
      tcurl:curl,
      tcategory:category,
      
    };
    try {
      const response = await axios.post("http://localhost:5000/tasks", newTask);
      console.log("Task added successfully:", response.data);
      setCoursesName("");
      setDescription("");
      setDuration("");
      setUrl("");
      setCategory("");
      onUpdateTasks(); // Fetch the updated tasks list from the server and update the parent component
    } catch (error) {
      console.error("Failed to add task:", error);
  };
}

  return (
    <section className="add-courses-section">
      <div className="image-container">
        <img style={{width:'25rem',position:'relative',right:'14rem',top:'8rem'}}
          src="https://cdn-fnplo.nitrocdn.com/TNwzUayTjddwIyaEAePQvCwBPsXfOqXj/assets/images/optimized/rev-2ed7a1c/www.n-school.com/wp-content/uploads/2021/11/Group-1502.png"
          alt="Course Image"
          className="course-image"
        />
      </div>
      <div className="form-container" style={{position:'relative',right:'8rem'}} >
        <h4 style={{ fontFamily: 'serif', fontWeight: '700', alignItems: 'center', textAlign: 'center' }}>Course Management</h4><br />
        <form className="form" style={{width:'30rem',position:'relative'}}>
          <label className="form-label">Courses Name</label>
          <input
            type="text"
            className="form-input"
            placeholder="Courses Name"
            value={coursesName}
            onChange={(e) => setCoursesName(e.target.value)}
          />
          {errors.coursesName && <span className="error">{errors.coursesName}</span>}
          
          <label className="form-label">Description</label>
          <textarea
            style={{ height: '6rem' }}
            type="text"
            className="form-input"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {errors.description && <span className="error">{errors.description}</span>}
          
          <label className="form-label">Duration</label>
          <input
            type="text"
            className="form-input"
            placeholder="Total Time (e.g., 12ABCD)"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
          />
          {errors.duration && <span className="error">{errors.duration}</span>}
          
          <label className="form-label">Image</label>
          <textarea
            type="text"
            className="form-input"
            placeholder="Image URL"
            value={curl}
            onChange={(e) => setUrl(e.target.value)}
          />
          {errors.curl && <span className="error">{errors.curl}</span>}
          
          <label className="form-label">Category</label>
          <select
            className="form-input"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="SOFTWARE DEVELOPMENT">SOFTWARE DEVELOPMENT</option>
            <option value="AUTOMOTIVE EMBEDDED">AUTOMOTIVE EMBEDDED</option>
            <option value="TESTING TRACK">TESTING TRACK</option>
            <option value="MECHANICAL DESIGN">MECHANICAL DESIGN</option>
          </select>
          {errors.category && <span className="error">{errors.category}</span>}
          
          <div style={{ textAlign: "end" }}>
            <Button className="add-courses-button" type="submit" onClick={(e) =>addCourses(e)}>
              Add Courses
            </Button>
          </div>
        </form>
      </div>
      {/* <TasksList /> */}
    </section>
  );
};

export default AddCourses;
