import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Grid, MenuItem, IconButton } from '@mui/material';
import axios from 'axios';
import '../styles/Applynow.css'
import CloseIcon from '@mui/icons-material/Close'; 

const Applynow = () => {
  const [fullName, setFullName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [degree, setDegree] = useState('');
  const [specialization, setSpecialization] = useState('');
  const [yearOfPassing, setYearOfPassing] = useState('');
  const [percentageOfMarks, setPercentageOfMarks] = useState('');
  const [otherDegree, setOtherDegree] = useState('');
  const [otherDegreeError, setOtherDegreeError] = useState('');
  const [showForm, setShowForm] = useState(true);   
  

  const [fullNameError, setFullNameError] = useState('');
  const [lastNameError, setLastNameError] = useState('');
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
    { value: 'diploma', label: 'Diploma' },
    { value: 'BE', label: 'BE' },
    { value: 'other', label: 'Other' },
  ];

  const specializationOptions = [
    { value: 'Electronic & Communication', label: 'Electronic & Communication' },
    { value: 'Computer Science', label: 'Computer Science' },
    { value: 'Electrical And Electronic', label: 'Electrical And Electronic' },
    { value: 'Mechanical', label: 'Mechanical' },
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

  const handleCloseForm = () => {
    setShowForm(false); // Set the showForm state to false to hide the form
  };

  const validateForm = () => {
    const fullNameError = validateName(fullName);
    const lastNameError = validateName(lastname);
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
      !lastNameError &&
      !emailError &&
      !mobileNumberError &&
      !degreeError &&
      !specializationError &&
      !yearOfPassingError &&
      !percentageOfMarksError
    );
  };

  const handleOtherDegreeChange = (event) => {
    const { value } = event.target;
    const alphabeticValue = value.replace(/[^A-Za-z\s]/g, ''); // Allow only alphabetic characters
    setOtherDegree(alphabeticValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    if (validateForm()) {
      const formData = {
        a_name: fullName,
        // a_name: lastname,
        a_email: email,
        a_mobnum: mobileNumber,
        a_degree: degree === 'other' ? otherDegree : degree,
        a_specialization: specialization,
        a_yearofpassing: yearOfPassing,
        a_marks: percentageOfMarks,
      };

      try {
        const response = await axios.post('http://localhost:5000/apply', formData);
        console.log('Form submitted successfully:', response.data);

        setFullName('');
        setLastname('');
        setEmail('');
        setMobileNumber('');
        setDegree('');
        setSpecialization('');
        setYearOfPassing('');
        setPercentageOfMarks('');
        setFormError('Form submitted successfully');
        setShowForm(false);
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
      case 'lastname':
        setLastname(value);
        setLastNameError(validatelastName(value)); // Change this line to setLastNameError
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
          setOtherDegree(''); // Clear Other Degree input
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
  const validatelastName = (value) => {
    if (!/^[A-Za-z\s]+$/.test(value)) {
      return 'Give a valid name';
    }
    if (value.trim() === '') {
      return 'Name is required';
    }
    return '';
  };
  const validateOtherDegree = (value) => {
    if (degree === 'other' && value.trim() === '') {
      return 'Other Degree is required';
    }
    return '';
  };

  const validateEmail = (email) => {
    if (email.trim() === '') {
      return 'Email is required';
    }
  
    if (!/^(?!^\d)(?=[a-zA-Z]{3})(?=.*\d{2})[a-zA-Z\d._%+-]+@(gmail\.com|jhs\.co|microsoft\.com)$/i.test(email)) {
      return 'Invalid email format';
    }
  
    return '';
  };

 
const handleReset = () => {
  setFullName('');
  setLastname('');
  setEmail('');
  setMobileNumber('');
  setDegree('');
  setSpecialization('');
  setYearOfPassing('');
  setPercentageOfMarks('');
  setOtherDegree('');
  setFullNameError('');
  setLastNameError('');
  setEmailError('');
  setMobileNumberError('');
  setDegreeError('');
  setSpecializationError('');
  setYearOfPassingError('');
  setPercentageOfMarksError('');
  setOtherDegreeError('');
  setFormError('');
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
    } else if (!/^(2020|2021|2022|2023|2024)$/.test(value)) {
      return 'Year of Passing should be between 2020 and 2024';
    }
    return '';
  };
  
  const validatePercentageOfMarks = (value) => {
    if (value.trim() === '') {
      return 'Percentage of Marks is required';
    } else if (!/^\d+(\.\d{1,2})?$/.test(value) || parseFloat(value) > 100) {
      return 'Percentage of Marks should be a valid number between 0 and 100 with up to two decimal places';
    }
    return '';
  };
 
  
  
  
  
  

  return (
   
    <Box
    display="flex"
    justifyContent="center"
    alignItems="center"
    padding="2rem"
    height="500px"
    marginTop="300px"
    marginBottom="70px"
    style={{ position: 'relative', bottom: '13rem' }}
  >
   {showForm && (
      <Container className="apply" maxWidth="md" style={{ borderRadius: '10px', padding: '2rem' }}>
        

      <h3 style={{ fontWeight: '600', fontFamily: 'serif', color: '#66023b', marginBottom: '1rem',textAlign:'center' }}>Apply Now</h3>
      
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <label style={{fontWeight:'600'}}>First Name:</label>
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
          <Grid item xs={12} sm={6}>
            <label style={{fontWeight:'600'}}>Last Name:</label>
            <TextField 
              label="lastname"
              name="lastname"
              value={lastname}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!lastNameError}
              helperText={lastNameError}
            />
           
          </Grid>
          <Grid item xs={12} sm={6}>
            <label style={{fontWeight:'600'}}>Email:</label>
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


          <Grid item xs={12} sm={6}>
                <label style={{fontWeight:'600'}}>Mobile Number:</label>
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
              <Grid item xs={12} sm={6}>
              <label style={{ fontWeight: '600' }}>Degree:</label>
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
            {degree === 'other' && (
              <Grid item xs={12} sm={6}>
                <label style={{ fontWeight: '600' }}>Enter Other Degree:</label>
                <TextField
                  label="Other Degree"
                  name="otherDegree"
                  value={otherDegree}
                  onChange={handleOtherDegreeChange}
                  fullWidth
                  margin="normal"
                  error={!!otherDegreeError}
                  helperText={otherDegreeError}
                />
              </Grid>
            )}
              <Grid item xs={12} sm={6}>
                <label style={{fontWeight:'600'}}>Specialization:</label>
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
              <Grid item xs={12} sm={6}>
                <label style={{fontWeight:'600'}}>Year of Passing:</label>
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
              <Grid item xs={12} sm={6}>
                <label style={{fontWeight:'600'}}>Percentage of Marks:</label>
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
              {/* <Grid item xs={12} sm={6}>
  <label style={{fontWeight:'600'}}>Upload CV</label>
  <TextField
    type="file" // Set the input type to "file"
    name="cvFile" // Use a unique name for the file input
    // onChange={handleCvFileUpload} // Handle file upload changes
    fullWidth
    margin="normal"
    // error={!!cvFileError}
    // helperText={cvFileError}
  />
</Grid> */}
            </Grid>
            <Box display="flex" justifyContent="flex-start" marginTop="1rem">
              <Button type="submit" variant="contained" style={{background:'#66023b'}}>
                Submit
              </Button>
              <Button type="button" variant="outlined" onClick={handleReset}>
            Reset
          </Button>
            </Box>
          </form>
          {formError && (
            <Typography style={{ position: 'relative', top: '2rem' }} variant="body1" align="center" color="error" gutterBottom>
              {formError}
            </Typography>
          )}
        </Container>
            )}

      </Box>
  
  );
};

export default Applynow;