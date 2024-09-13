import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../MCA/MCA.css";
import axios from 'axios'
// import { Percent, Phone } from "@mui/icons-material";

const McaApplynow = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState(null);
  const [specialization, setSpecialization] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [degree, setdegree] = useState("");
  const [percentage, setPercentage] = useState("");
  
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "mobile":
        setMobile(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "specialization":
        setSpecialization(value);
        break;
        case "degree":
            setdegree(value);
            break;
      case "graduationYear":
        setGraduationYear(value);
        break;
        case "percentage": {/* Corrected case name */}
  setPercentage(value);
  break;
      default:
        break;
    }
  };

  const handleGenderChange = (selectedOption) => {
    setGender(selectedOption.value);
  };

  const handleDobChange = (date) => {
    setDob(date);
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    const validationErrors = validateues();
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateues();
    if (Object.keys(validationErrors).length === 0) {
      // Form is valid, do something with the data
      console.log("Form submitted:", {
        name, email, mobile, gender, dob, specialization, graduationYear,degree,percentage
      });
      alert("Thanks for registering!"); // Display alert message
      // Reset form values
      resetForm();
    } else {
      // Form is not valid, display error messages or take necessary actions
      setErrors(validationErrors);
    }
  };

  const validateues = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      errors.name = "Name can only contain letters and spaces";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!mobile.trim()) {
      errors.mobile = "Mobile is required";
    } else if (!/^[6789]\d{9}$/.test(mobile)) {
      errors.mobile = "Mobile number is invalid";
    }
    if (!gender) {
      errors.gender = "Gender is required";
    }
    if (!dob) {
      errors.dob = "Date of birth is required";
    }
    if (!specialization.trim()) {
      errors.specialization = "Specialization is required";
    }
    if (!degree.trim()) {
        errors.degree = "Year of degree is required";
      }
    if (!graduationYear.trim()) {
      errors.graduationYear = "Year of graduation is required"; 
    }
    if (!percentage.trim()) {
        errors.percentage = "your percentage is required";
      }
    return errors;
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMobile("");
    setGender("");
    setDob(null);
    setSpecialization("");
    setGraduationYear("");
    setdegree("");
    setPercentage("");
    setErrors({});
  };

  // List of gender options

  return (
    <div className="contact-container">
      {/* <div className="contact-image">
        <img
          src="../../images/mcaside.jpg"
          alt=""
          style={{ height: "650px", width: "480px", marginLeft: "-30px" }}
        />
      </div> */}
      <div className="contact-form">
        <h2>MCA Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.name)}
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.email)}
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={mobile}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.mobile)}
            />
            {errors.mobile && <p className="error-message">{errors.mobile}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Gender</label>
            <input
              type="text"
              id="gender"
              name="gender"
              value={gender}
              onChange={handleGenderChange}
              onBlur={handleBlur}
              error={Boolean(errors.mobile)}
            />
            {errors.gender && <p className="error-message">{errors.gender}</p>}
          </div>
          {/* <div className="form-group">
  <label htmlFor="gender">Gender</label>
  <Select
    id="gender"
    name="gender"
    value={
      ues.gender
        ? genderOptions.find((option) => option.value === ues.gender)
        : null
    }
    options={genderOptions}
    onChange={handleGenderChange}
    style={{ width: '30px' }} 
  />
  {errors.gender && <p className="error-message">{errors.gender}</p>}
</div> */}
 <div className="form-group">
            <label htmlFor="graduationYear">Degree</label>
            <select style={{width:'40%',height:'2.4rem'}}
              id="graduationYear"
              name="graduationYear"
              value={degree}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.degree)}
            >
              <option value="">Select</option>
              {/* Add options for graduation years */}
              <option value="2022">B.sC</option>
              <option value="2022">BCA</option>
              <option value="2023">BE</option>
              <option value="2024">B.Tech</option>
              <option value="2024">B.Tech</option>
              <option value="2024">Bachelor's degree</option>
              <option value="2024">Other</option>
              {/* Add more options as needed */}
            </select>
            {errors.degree && (
              <p className="error-message">{errors.degree}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="specialization">Specialization</label>
            <select style={{width:'40%',height:'2.4rem'}}
              id="specialization"
              name="specialization"
              value={specialization}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.specialization)}
            >
              <option value="">Select</option>
              {/* Add options for graduation years */}
              <option value="Artificial Intelligence">Artificial Intelligence</option>
        <option value="Data Science">Data Science</option>
        <option value="Machine Learning">Machine Learning</option>
        <option value="Software Engineering">Software Engineering</option>
        <option value="Cybersecurity">Cybersecurity</option>
        <option value="Computer Graphics">Computer Graphics</option>
        <option value="Web Development">Web Development</option>

              {/* Add more options as needed */}
            </select>
            {errors.specialization && (
              <p className="error-message">{errors.specialization}</p>
            )}
          </div>
          
          {/* <div className="form-group">
            <label htmlFor="specialization">Specialization</label>
            <input
              type="text"
              id="specialization"
              name="specialization"
              value={specialization}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.specialization)}
            />
            {errors.specialization && (
              <p className="error-message">{errors.specialization}</p>
            )}
          </div> */}
          <div className="form-group">
            <label htmlFor="dob" > Date of Birth</label>
            <DatePicker style={{width:'40%',height:'2.4rem'}}
              id="dob"
              name="dob"
              selected={dob}
              onChange={handleDobChange}
              onBlur={handleBlur}
              dateFormat="dd/MM/yyyy"
              error={Boolean(errors.dob)}
            />
            {errors.dob && <p className="error-message">{errors.dob}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="graduationYear">Year of Graduation</label>
            <select style={{width:'40%',height:'2.4rem'}}
              id="graduationYear"
              name="graduationYear"
              value={graduationYear}
              onChange={handleChange}
              onBlur={handleBlur}
              error={Boolean(errors.graduationYear)}
            >
              <option value="">Select</option>
              {/* Add options for graduation years */}
              <option value="2022">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              {/* Add more options as needed */}
            </select>
            {errors.graduationYear && (
              <p className="error-message">{errors.graduationYear}</p>
            )}
          </div>
          <div className="form-group">
  <label htmlFor="percentage">Percentage</label>
  <input
    type="text"
    id="percentage"
    name="percentage"
    value={percentage}
    onChange={handleChange}
    onBlur={handleBlur}
    error={errors.percentage ? true : false}
  />
  {errors.percentage && <p className="error-message">{errors.percentage}</p>}
</div>
          <button className="outline-btn" style={{ padding: "3px 15px" }}>
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default McaApplynow;