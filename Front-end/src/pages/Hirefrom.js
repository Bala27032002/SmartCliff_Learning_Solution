import React, { useState } from 'react';
import {
  TextField,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  Button,
  Grid,
  FormHelperText,
  FormLabel,
} from '@mui/material';

const HireForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [idNumber, setIdNumber] = useState('');
  const [email, setEmail] = useState('');
  const [major, setMajor] = useState('');
  const [degree, setDegree] = useState('');
  const [graduationDate, setGraduationDate] = useState('');
  const [citizenship, setCitizenship] = useState('');
  const [visaStatus, setVisaStatus] = useState('');
  const [employer, setEmployer] = useState('');
  const [address, setAddress] = useState('');
  const [salary, setSalary] = useState('');
  const [employmentStatus, setEmploymentStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const validationErrors = {};

    if (!firstName) {
      validationErrors.firstName = 'First Name is required';
    }

    if (!lastName) {
      validationErrors.lastName = 'Last Name is required';
    }

    if (!idNumber) {
      validationErrors.idNumber = 'Identification Number is required';
    }

    if (!email) {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Invalid Email';
    }

    if (!major) {
      validationErrors.major = 'Major is required';
    }

    if (!degree) {
      validationErrors.degree = 'Degree is required';
    }

    if (!graduationDate) {
      validationErrors.graduationDate = 'Graduation Date is required';
    }

    if (!citizenship) {
      validationErrors.citizenship = 'Citizenship is required';
    }

    if (visaStatus && !isValidVisaStatus(visaStatus)) {
      validationErrors.visaStatus = 'Invalid Visa Status';
    }

    if (!employmentStatus) {
      validationErrors.employmentStatus = 'Employment Status is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Perform form submission or API call here

    // Reset form fields and errors
    setFirstName('');
    setLastName('');
    setIdNumber('');
    setEmail('');
    setMajor('');
    setDegree('');
    setGraduationDate('');
    setCitizenship('');
    setVisaStatus('');
    setEmployer('');
    setAddress('');
    setSalary('');
    setEmploymentStatus('');
    setErrors({});
  };

  const isValidEmail = (value) => {
    // Email validation logic (can be replaced with a library or regex pattern)
    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
  };

  const isValidVisaStatus = (value) => {
    // Visa status validation logic (can be replaced with a library or predefined values)
    const validVisaStatuses = ['H1B', 'L1', 'F1', 'B1/B2', 'Green Card'];
    return validVisaStatuses.includes(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="First Name"
            fullWidth
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            error={!!errors.firstName}
            helperText={errors.firstName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Last Name"
            fullWidth
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            error={!!errors.lastName}
            helperText={errors.lastName}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Identification Number"
            fullWidth
            required
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            error={!!errors.idNumber}
            helperText={errors.idNumber}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            fullWidth
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={!!errors.email}
            helperText={errors.email}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Major"
            fullWidth
            required
            value={major}
            onChange={(e) => setMajor(e.target.value)}
            error={!!errors.major}
            helperText={errors.major}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Degree"
            fullWidth
            required
            value={degree}
            onChange={(e) => setDegree(e.target.value)}
            error={!!errors.degree}
            helperText={errors.degree}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Graduation Date"
            fullWidth
            required
            type="date"
            value={graduationDate}
            onChange={(e) => setGraduationDate(e.target.value)}
            error={!!errors.graduationDate}
            helperText={errors.graduationDate}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Citizenship"
            fullWidth
            required
            value={citizenship}
            onChange={(e) => setCitizenship(e.target.value)}
            error={!!errors.citizenship}
            helperText={errors.citizenship}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Visa Status"
            fullWidth
            value={visaStatus}
            onChange={(e) => setVisaStatus(e.target.value)}
            error={!!errors.visaStatus}
            helperText={errors.visaStatus}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl component="fieldset" required error={!!errors.employmentStatus}>
            <FormLabel component="legend">Employment Status</FormLabel>
            <RadioGroup
              row
              value={employmentStatus}
              onChange={(e) => setEmploymentStatus(e.target.value)}
            >
              <FormControlLabel
                value="part-time"
                control={<Radio />}
                label="Part-time"
              />
              <FormControlLabel
                value="full-time"
                control={<Radio />}
                label="Full-time"
              />
              <FormControlLabel
                value="temporary"
                control={<Radio />}
                label="Temporary"
              />
              <FormControlLabel
                value="unemployed"
                control={<Radio />}
                label="Unemployed"
              />
            </RadioGroup>
            {errors.employmentStatus && (
              <FormHelperText>{errors.employmentStatus}</FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Employer (Company Name)"
            fullWidth
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address"
            fullWidth
            multiline
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Salary"
            fullWidth
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Send
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default HireForm;
