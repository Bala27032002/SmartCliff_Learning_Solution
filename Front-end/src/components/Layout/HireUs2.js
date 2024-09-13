import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/training-lft-image.png";
import "../styles/HomeStyles.css";

const HireUs2 = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    designation: '',
    companyName: '',
    hiringEnquiry: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;
    const newErrors = {};

    // Validation checks
    if (formData.name.trim() === '') {
      newErrors.name = 'Name is required';
      formIsValid = false;
    } else if (/\d/.test(formData.name)) {
      newErrors.name = 'Name should not contain numbers';
      formIsValid = false;
    } else if (!/^[A-Z][a-z]*$/.test(formData.name)) {
      newErrors.name = 'Name should start with a capital letter and contain only letters';
      formIsValid = false;
    }

    if (!formData.email) {
      formIsValid = false;
      newErrors.email = 'Please enter your email';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      formIsValid = false;
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber) {
      formIsValid = false;
      newErrors.phoneNumber = 'Please enter your phone number';
    } else if (!/^\d+$/.test(formData.phoneNumber)) {
      formIsValid = false;
      newErrors.phoneNumber = 'Please enter a valid phone number (numeric values only)';
    }
    

    if (!formData.designation) {
      formIsValid = false;
      newErrors.designation = 'Please enter your designation';
    }

    if (!formData.companyName) {
      formIsValid = false;
      newErrors.companyName = 'Please enter your company name';
    }

    if (!formData.hiringEnquiry) {
      formIsValid = false;
      newErrors.hiringEnquiry = 'Please enter your hiring enquiry';
    }

    if (!formData.message) {
      formIsValid = false;
      newErrors.message = 'Please enter your message';
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Check for errors in real-time
    if (value.trim() === '') {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Please enter your ${name}`,
      }));
    } else if (name === 'name' && /\d/.test(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Name should not contain numbers',
      }));
    } else if (
      name === 'name' &&
      !/^[A-Z][a-z]*$/.test(value)
    ) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: 'Name should start with a capital letter and contain only letters',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    if (!formData[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: `Please enter your ${name}`,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
        designation: '',
        companyName: '',
        hiringEnquiry: '',
        message: '',
      });
      setErrors({});
    } else {
      // Highlight all fields with errors
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        Object.keys(formData).forEach((key) => {
          if (!formData[key]) {
            updatedErrors[key] = `Please enter your ${key}`;
          }
        });
        return updatedErrors;
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src={logo} alt="Image" className="img-fluid" />
        </div>

        <div className="col-md-6 mx-auto">
          <h1 className="mb-4 Quick">Hire Us</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label" >
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                onBlur={handleBlur}
                style={{ border: "1px solid black",boxShadow:"0px 0px 1px 1px black"}}
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                onBlur={handleBlur}
                style={{ border: "1px solid black",boxShadow:"0px 0px 1px 1px black"}}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="phoneNumber" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                onBlur={handleBlur}
                style={{ border: "1px solid black",boxShadow:"0px 0px 1px 1px black"}}
              />
           {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

            </div>
            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
                Designation
              </label>
              <input
                type="text"
                className="form-control"
                id="designation"
                name="designation"
                value={formData.designation}
                onChange={handleInputChange}
                onBlur={handleBlur}
                style={{ border: "1px solid black",boxShadow:"0px 0px 1px 1px black"}}
              />
              {errors.designation && <span className="error">{errors.designation}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                onBlur={handleBlur}
                style={{ border: "1px solid black",boxShadow:"0px 0px 1px 1px black"}}
              />
              {errors.companyName && <span className="error">{errors.companyName}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="hiringEnquiry" className="form-label">
                Hiring Enquiry
              </label>
              <input
                type="text"
                className="form-control"
                id="hiringEnquiry"
                name="hiringEnquiry"
                value={formData.hiringEnquiry}
                onChange={handleInputChange}
                onBlur={handleBlur}
                style={{ border: "1px solid black",boxShadow:"0px 0px 1px 1px black"}}
              />
              {errors.hiringEnquiry && <span className="error">{errors.hiringEnquiry}</span>}
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                onBlur={handleBlur}
                style={{ border: "1px solid black",boxShadow:"0px 0px 1px 1px black"}}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HireUs2;