import React, { useState } from 'react';
import { TextField, Grid, FormControl, InputLabel, Select, MenuItem, Button, Radio, RadioGroup, FormControlLabel } from '@mui/material';
import Layout from "../components/Layout/Layout";

const Joinusform = ({ btnname, btnvar, btncolor }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [degree, setDegree] = useState('');
  const [place, setPlace] = useState('');
  const [cv, setCV] = useState(null);
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const formData = {
      fullName,
      email,
      mobileNumber,
      degree,
      place,
      cv,
      gender,
      dob,
    };
    
    console.log(formData); // You can perform your submit logic here
    
    // Clear the form
    setFullName('');
    setEmail('');
    setMobileNumber('');
    setDegree('');
    setPlace('');
    setCV(null);
    setGender('');
   setDob('');
  };

  return (
 
      <>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
      <form onSubmit={handleSubmit} style={{ padding: '20px',width:'33rem',height:'100%',background:'white' }}>
      <h3 style={{ fontWeight: '600', fontFamily: 'serif', color: '#66023b', marginBottom: '1rem',textAlign:'center' }}>Join Us</h3>
        {/* ... */}
        <Grid container spacing={2} >
          {/* ... */}
          <Grid item xs={6} >
            <label>Full Name:</label>
            <TextField
              id="fullName"
              name="fullName"
              label="Full Name"
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              fullWidth
            />
          </Grid>
          {/* ... */}
          <Grid item xs={6} >
          <label>Email:</label>
            <TextField
              id="email"
              name="email"
              label="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
          <label>Mobile.No:</label>
            <TextField
              id="mobileNumber"
              name="mobileNumber"
              label="Mobile Number"
              value={mobileNumber}
              onChange={(event) => setMobileNumber(event.target.value)}
              fullWidth
            />
             <label>DOB:</label>
          </Grid>
          {/* ... */}
          <Grid item xs={6}>
            <FormControl component="fieldset">
            <label>Gender:</label>
              <RadioGroup
                row
                name="gender"
                value={gender}
                onChange={(event) => setGender(event.target.value)}
              >
                <FormControlLabel value="male" control={<Radio />} label="Male" />
                <FormControlLabel value="female" control={<Radio />} label="Female" />
              </RadioGroup>
             
            </FormControl>
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="dobDay"
              name="dobDay"
              label="Day"
              value={dob.split('/')[0] || ''}
              onChange={(event) => setDob(`${event.target.value}/${dob.split('/')[1] || ''}/${dob.split('/')[2] || ''}`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="dobMonth"
              name="dobMonth"
              label="Month"
              value={dob.split('/')[1] || ''}
              onChange={(event) => setDob(`${dob.split('/')[0] || ''}/${event.target.value}/${dob.split('/')[2] || ''}`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="dobYear"
              name="dobYear"
              label="Year"
              value={dob.split('/')[2] || ''}
              onChange={(event) => setDob(`${dob.split('/')[0] || ''}/${dob.split('/')[1] || ''}/${event.target.value}`)}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} >
          <label>Select Degree:</label>
            <FormControl fullWidth>
            
              <InputLabel id="degree-label">Degree</InputLabel>
              <Select
                id="degree"
                name="degree"
                labelId="degree-label"
                value={degree}
                onChange={(event) => setDegree(event.target.value)}
                fullWidth
              >
                <MenuItem value="">Select Degree</MenuItem>
                <MenuItem value="B.E./B.Tech">B.E./B.Tech</MenuItem>
                <MenuItem value="B.Sc">B.Sc</MenuItem>
                {/* Add more options as needed */}
              </Select>
            </FormControl>
          </Grid>
          {/* ... */}
          <Grid item xs={12} >
          <label>Job Role:</label>
            <TextField
              id="place"
              name="place"
              label="Job Role"
              value={place}
              onChange={(event) => setPlace(event.target.value)}
              fullWidth
            />
          </Grid>
          {/* ... */}
          <Grid item xs={12}>
            <input
              id="cv"
              name="cv"
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(event) => setCV(event.target.files[0])}
              fullWidth
            />
          </Grid>
          {/* ... */}
        </Grid>
        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
          <Button type="submit" variant="success" style={{ width: '20%',position:'relative',right:'12.5rem',background:'#66023b',color:'white',marginTop:'2rem' }} class="btn btn-primary">
            Submit
          </Button>
        </Grid>
      </form>
      </div>
      {/* ... */}
  </>
  );
}

export default Joinusform;
