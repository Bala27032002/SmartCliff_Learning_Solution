import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Grid, MenuItem } from '@mui/material';
import axios from 'axios';
import Layout from '../components/Layout/Layout';
import TryUI from './Courses/TryUI';


const MainRegister = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [degree, setDegree] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [yearOfPassing, setYearOfPassing] = useState('');
  const [percentageOfMarks, setPercentageOfMarks] = useState('');

  const [fullNameError, setFullNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [mobileNumberError, setMobileNumberError] = useState('');
  const [degreeError, setDegreeError] = useState('');
  const [specializationError, setSpecializationError] = useState('');
  const [yearOfPassingError, setYearOfPassingError] = useState('');
  const [percentageOfMarksError, setPercentageOfMarksError] = useState('');
  const [formError, setFormError] = useState('');

  // Options for Degree and Specialization dropdowns
  const degreeOptions = [
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'phd', label: 'PhD' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'diploma', label: 'Diploma' },
    { value: 'certificate', label: 'Certificate' },
    { value: 'other', label: 'Other' },
  ];

  const specializationOptions = [
    { value: 'computer_science', label: 'Computer Science' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'biology', label: 'Biology' },
    { value: 'business_administration', label: 'Business Administration' },
    { value: 'psychology', label: 'Psychology' },
    { value: 'art_design', label: 'Art and Design' },
    { value: 'medicine', label: 'Medicine' },
    { value: 'other', label: 'Other' },
  ];

  // const validatePhoneNumber = (phone) => {
  //   const phonePattern = /^[6-9]\d{9}$/;
  //   return phonePattern.test(phone);
  // };

  const validateForm = () => {
    const fullNameError = validateName(fullName);
    const emailError = validateEmail(email);
    const mobileNumberError = validateMobileNumber(mobileNumber);
    const degreeError = validateDegree(degree);
    const specializationError = validateSpecialization(specialization);
    const yearOfPassingError = validateYearOfPassing(yearOfPassing);
    const percentageOfMarksError = validatePercentageOfMarks(percentageOfMarks);

    setFullNameError(fullNameError);
    setEmailError(emailError);
    setMobileNumberError(mobileNumberError);
    setDegreeError(degreeError);
    setSpecializationError(specializationError);
    setYearOfPassingError(yearOfPassingError);
    setPercentageOfMarksError(percentageOfMarksError);

    return (
      !fullNameError &&
      !emailError &&
      !mobileNumberError &&
      !degreeError &&
      !specializationError &&
      !yearOfPassingError &&
      !percentageOfMarksError
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        a_name: fullName,
        a_email: email,
        a_mobnum: mobileNumber,
        a_degree: degree,
        a_specialization: specialization,
        a_yearofpassing: yearOfPassing,
        a_marks: percentageOfMarks,
      };

      try {
        const response = await axios.post('http://localhost:5000/apply', formData);
        console.log('Form submitted successfully:', response.data);

        setFullName('');
        setEmail('');
        setMobileNumber('');
        setDegree('');
        setSpecialization('');
        setYearOfPassing('');
        setPercentageOfMarks('');
        setFormError('Form submitted successfully');
      } catch (error) {
        console.error('Failed to submit form:', error);
        setFormError('User already exists');
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'fullName':
        setFullName(value);
        setFullNameError(validateName(value));
        break;
      case 'email':
        setEmail(value);
        setEmailError(validateEmail(value));
        break;
      case 'mobileNumber':
        setMobileNumber(value);
        setMobileNumberError(validateMobileNumber(value));
        break;
      case 'degree':
        setDegree(value);
        setDegreeError(validateDegree(value));
        break;
      case 'specialization':
        setSpecialization(value);
        setSpecializationError(validateSpecialization(value));
        break;
      case 'yearOfPassing':
        setYearOfPassing(value);
        setYearOfPassingError(validateYearOfPassing(value));
        break;
      case 'percentageOfMarks':
        setPercentageOfMarks(value);
        setPercentageOfMarksError(validatePercentageOfMarks(value));
        break;
      default:
        break;
    }

    setFormError('');
  };

  const validateName = (value) => {
    if (!/^[A-Za-z\s]+$/.test(value)) {
      return 'Give a valid name';
    }
    if (value.trim() === '') {
      return 'Name is required';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (email.trim() === '') {
      return 'Email is required';
    }

    if (!/^(?!^[0-9])(?=.*[A-Za-z]{3})(?=.*[0-9]{2})[A-Za-z0-9._%+-]+@gmail\.com$/i.test(email)) {
      return 'Invalid email format';
    }

    return '';
  };

 


  const validateMobileNumber = (value) => {
    if (value.trim() === '') {
      return 'Mobile number is required';
    }
    if (!/^[6-9]\d{9}$/.test(value)) {
      return 'Invalid mobile number';
    }
    return '';
  };

  const validateDegree = (value) => {
    if (value.trim() === '') {
      return 'Degree is required';
    }
    return '';
  };

  const validateSpecialization = (value) => {
    if (value.trim() === '') {
      return 'Specialization is required';
    }
    return '';
  };

  const validateYearOfPassing = (value) => {
    if (value.trim() === '') {
      return 'Year of Passing is required';
    } else if (!/^\d{4}$/.test(value)) {
      return 'Year of Passing should be a four-digit number';
    }
    return '';
  };
  
  const validatePercentageOfMarks = (value) => {
    if (value.trim() === '') {
      return 'Percentage of Marks is required';
    } else if (!/^\d+(\.\d+)?$/.test(value)) {
      return 'Percentage of Marks should be a valid number';
    }
    return '';
  };
 
  
  
  
  
  

  return (
    <Layout>
      <TryUI text={"ApplyNow"} />
      <Box display="flex" justifyContent="center" alignItems="center" padding="2rem" height="500px" marginTop="300px" marginBottom="370px"
      style={{position:'relative',bottom:'5rem'}}
      >
        <Box flex="0 0 40%" paddingRight="2rem" marginBottom="260px">
        <img
              src="http://localhost:3000/static/media/loginimg.913a3d81a97b9f657691.webp"
              alt="Your Image"
              style={{ marginTop: '10px'  ,width:"500px"}}
            />        </Box>
        <Container maxWidth="xs">
          <h3 style={{fontWeight: '600', fontFamily:'serif', color: '#66023b'}}>Apply Now</h3><br/>
          <form onSubmit={handleSubmit} style={{ height: "700px", marginBottom: "100px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <label>Full Name:</label>
                <TextField
                  label="Full Name"
                  name="fullName"
                  value={fullName}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!fullNameError}
                  helperText={fullNameError}
                />
              </Grid>
              <Grid item xs={12}>
              <label>Email:</label>
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!emailError}
                  helperText={emailError}
                />
              </Grid>

              <Grid item xs={12}>
              <label>Mobile.NO:</label>
                <TextField
                  label="Mobile Number"
                  name="mobileNumber"
                  value={mobileNumber}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!mobileNumberError}
                  helperText={mobileNumberError}
                />
              </Grid>
              <Grid item xs={12}>
              <label>Select Degree:</label>
                <TextField
                  select
                  label="Degree"
                  name="degree"
                  value={degree}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!degreeError}
                  helperText={degreeError}
                >
                  {degreeOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
              <label>Select Specialization :</label>
                <TextField
                  select
                  label="Specialization"
                  name="specialization"
                  value={specialization}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!specializationError}
                  helperText={specializationError}
                >
                  {specializationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
              <label>Year Of Passing:</label>
                <TextField
                  label="Year of Passing"
                  name="yearOfPassing"
                  value={yearOfPassing}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!yearOfPassingError}
                  helperText={yearOfPassingError}
                />
              </Grid>
              <Grid item xs={12}>
              <label>CGPA/Percentage:</label>
                <TextField
                  label="Percentage of Marks"
                  name="percentageOfMarks"
                  value={percentageOfMarks}
                  onChange={handleChange}
                  fullWidth
                  margin="normal"
                  error={!!percentageOfMarksError}
                  helperText={percentageOfMarksError}
                />
              </Grid>
            </Grid>
            <Box display="flex" justifyContent="center">
              <Button type="submit" variant="contained" style={{background:'#66023b',color:'white'}}>
                Submit
              </Button>
            </Box>
          </form>
          {formError && (
            <Typography style={{position:'relative',top:'6rem'}} variant="body1" align="center" color="error" gutterBottom>
              {formError}
            </Typography>
          )}
        </Container>
      </Box>
    </Layout>
  );
};

export default MainRegister;