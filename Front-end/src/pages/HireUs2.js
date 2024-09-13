import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/hire2img.webp";
import "../styles/HomeStyles.css";
import Layout from '../components/Layout/Layout';
import axios from 'axios'

const HireUs2 = ({onUpdateTasks}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [designation, setDesignation] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [hiringEnquiry, setHiringEnquiry] = useState('');
  // const [message, setMessage] = useState('');
  const [tasks, setTasks] = useState([]);
  const [updateUI,setUpdateUI] = useState(false);
  const [nameError, setNameError] = useState('');
  const [companyNameError, setCompanyNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [designationError, setdesignationError] = useState('');
  const [hiringError, sethiringError] = useState('');
  // const [messageLengthError, setMessageLengthError] = useState('');
  

  const [errors, setErrors] = useState({});

  const url = 'http://localhost:5000/hireus'

 

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        setNameError('Please enter only alphabets for the name');
      } else {
        setNameError('');
      }
    }
    if (name === 'companyName') {
      if (!/^[a-zA-Z\s0-9]+$/.test(value)) {
        setCompanyNameError('Please enter only alphabets and numbers for the company name');
      } else {
        setCompanyNameError('');
      }
    }
    if (name === 'email') {
      if (!/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(value)) {
        setEmailError('Please enter a valid email address');
      } else {
        setEmailError('');
      }
    }
    if (name === 'phoneNumber') {
      if (!/^[6-9]\d{9}$/.test(value)) {
        setPhoneNumberError('Please enter a valid 10-digit phone number starting with 6-9');
      } else {
        setPhoneNumberError('');
      }
    }
    if (name === 'designation') {
      if (!/^[a-zA-Z\s]+$/.test(value)) {
        setdesignationError('Please enter only alphabets letters');
      } else {
        setdesignationError('');
      }
    }
    if (name === 'hiringEnquiry') {
      if (!/^[a-zA-Z\s.,&%0-9]+$/.test(value)) {
        sethiringError('Please enter only alphabets, and integer numbers');
      } else {
        sethiringError('');
      }
    }
    // if (name === 'message') {
    //   if (value.length > 500) {
    //     setMessageLengthError('Message should not exceed 500 characters');
    //   } else {
    //     setMessageLengthError('');
    //   }
    // }
    switch (name) {
      case 'name':
        setName(value);
        break;
        case 'email':
          setEmail(value);
          break;
          case 'phoneNumber':
            setPhoneNumber(value);
            break;
      case 'designation':
        setDesignation(value);
        break;
        case 'companyName':
          setCompanyName(value);
          break;
      case 'hiringEnquiry':
        setHiringEnquiry(value);
        break;
        // case 'message':
        //   setMessage(value);
        //   break;
      default:
        break;
    }
  };  


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name.trim() !== '' &&
      email.trim() !== '' &&
      phoneNumber.trim() !== '' &&
      designation.trim() !== '' &&
      companyName.trim() !== '' &&
      hiringEnquiry.trim() !== '' 
      // message.trim() !== ''
    ) {
      // All required fields are filled, proceed to submit
      const hiredata = {
        hire_name: name,
        hire_email: email,
        hire_ph: phoneNumber,
        hire_design: designation,
        hire_company: companyName,
        hiring_enquiry: hiringEnquiry,
        // hire_msg: message,
      };
     
      try {
        const response = await axios.post("http://localhost:5000/hireus", hiredata);
        console.log("Task added successfully:", response.data);
        setName('');
        setEmail('');
        setPhoneNumber('');
        setDesignation('');
        setCompanyName('');
        setHiringEnquiry('');
        // setMessage('');
        onUpdateTasks(); // Fetch the updated tasks list from the server and update the parent component
      } catch (error) {
        console.error("Failed to add task:", error);
      }
      setErrors({});
    } else {
      // Highlight all fields with errors
      setErrors((prevErrors) => {
        const updatedErrors = { ...prevErrors };
        const formData = {
          name,
          email,
          phoneNumber,
          designation,
          companyName,
          hiringEnquiry,
          // message,
        };
        Object.keys(formData).forEach((key) => {
          if (formData[key].trim() === '') {
            updatedErrors[key] = `Please enter your ${key}`;
          }
        });
        return updatedErrors;
      });
    }
  };

  return (
    <Layout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <img src={logo} style={{ position: "relative", top: '4rem' }} alt="Image" className="img-fluid" />
          </div>

          <div className="col-md-6 mx-auto">
            <h3 className="mb-4 Quick" style={{ fontWeight: '700', fontFamily: 'serif', color: '#66023b' }}>Hire From Us</h3>
            <form onSubmit={handleSubmit} style={{position:'relative',bottom:'1rem'}}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  style={{ border: "1px solid black", boxShadow: "0px 0px 1px 1px black" }}
                />
                {nameError && <div className="text-danger">{nameError}</div>}
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
                  value={email}
                  onChange={handleChange}
                  style={{ border: "1px solid black", boxShadow: "0px 0px 1px 1px black" }}
                />
             {emailError && <div className="text-danger">{emailError}</div>}
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
                  value={phoneNumber}
                  onChange={handleChange}
                  style={{ border: "1px solid black", boxShadow: "0px 0px 1px 1px black" }}
                />
              {phoneNumberError && <div className="text-danger">{phoneNumberError}</div>}
{/* </div> */}
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
                  value={designation}
                  onChange={handleChange}
             
                  style={{ border: "1px solid black", boxShadow: "0px 0px 1px 1px black" }}
                />
       {designationError && <div className="text-danger">{designationError}</div>}
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
                  value={companyName}
                  onChange={handleChange}
                  style={{ border: "1px solid black", boxShadow: "0px 0px 1px 1px black" }}
                />
             {companyNameError && <div className="text-danger">{companyNameError}</div>}
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
                  value={hiringEnquiry}
                  onChange={handleChange}
                  style={{ border: "1px solid black", boxShadow: "0px 0px 1px 1px black" }}
                />
               {hiringError && <div className="text-danger">{hiringError}</div>}
              </div>
              {/* <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  value={message}
                  onChange={handleChange}
                
                  style={{ border: "1px solid black", boxShadow: "0px 0px 1px 1px black" }}
                ></textarea>
               {messageLengthError && <div className="text-danger">{messageLengthError}</div>}
  <div className="text-muted">{message.length}/500 characters</div>
              </div> */}
              <button type="submit" className="btn btn-primary" style={{ background: '#66023b', color: 'white' }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HireUs2;
