import React, { useState } from 'react';
import '../pages/Form.css'; // Make sure to import your CSS file
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import axios from 'axios'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Form = () => {
  const [gender, setGender] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showcPassword, setShowcPassword] = useState(false);
  const [full_name,setFullname]=useState("");
  const [user_name,setUsername]=useState("");
  const [email_id,setEmailid]=useState("");
  const [phone_no,setPhoneno]=useState("");
  const [password,setPassword]=useState("");
  const [c_password,setC_password]=useState("");




  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowcPassword = () => setShowPassword((show) => !show);

  const handlenamechange=(event)=>{
    setFullname(event.target.value)
  }
  const handleusernamechange=(event)=>{
    setUsername(event.target.value)
  }
  const handleemailchange=(event)=>{
    setEmailid(event.target.value)
  }
  const handlephonechange=(event)=>{
    setPhoneno(event.target.value)
  }
  const handlepasswordchange=(event)=>{
    setPassword(event.target.value)
  }
  const hanldec_passwordchange=(event)=>{
    setC_password(event.target.value)
  }
 


  const handleSubmit = async (e) => {
    e.preventDefault();const formData = {
      full_name:full_name,
      user_name:user_name,
      email_id:email_id,
      phone_no:phone_no,
      password:password,
      c_password:c_password
      };
  console.log(formData)
      try {
        const response = await axios.post("http://localhost:5000/exampleform", formData);
        console.log("Response:", response.data);if (response.data.message === "Data already exists for this email and area of interest") {
        } else {
          alert("Form has been submitted successfully.");
         }
      } catch (error) {
        console.error("Failed to add task:", error);
      }
    
  };






  return (
    <div className="container">
      <div className="title">Registration</div>
      <form action="#" onSubmit={handleSubmit}>
        <div className="user__details">
      <div class="input__box">
        <span class="details">Full Name</span>
        <input  value={full_name} onChange={handlenamechange} type="text" placeholder="E.g: John Smith" required />
      </div>
      <div class="input__box">
        <span class="details">Username</span>
        <input type="text" value={user_name} onChange={handleusernamechange} placeholder="johnWC98" required />
      </div>
      <div class="input__box">
        <span class="details">Email</span>
        <input type="email" value={email_id} onChange={handleemailchange} placeholder="johnsmith@hotmail.com" required />
      </div>
      <div class="input__box">
        <span class="details">Phone Number</span>
        <input type="tel" value={phone_no} onChange={handlephonechange}  placeholder="012-345-6789" required />
      </div>
      <div class="input__box">
        <span class="details">Password</span>
        <FormControl sx={{ m: 1, width: '29ch' }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
    <OutlinedInput
      style={{ height: "3rem" }}
      value={password}
      onChange={handlepasswordchange}
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      label="Password"
    />
  </FormControl>
      </div>
      <div className="input__box">
  <span className="details">Confirm Password</span>
  <FormControl sx={{ m: 1, width: '29ch' }} variant="outlined">
    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
    <OutlinedInput
    value={c_password}
    onChange={hanldec_passwordchange}
      style={{ height: "3rem" }}
      id="outlined-adornment-password"
      type={showPassword ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={handleClickShowcPassword}
            onMouseDown={handleMouseDownPassword}
            edge="end"
          >
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>
      }
      label="Confirm Password"
    />
  </FormControl>
</div>


    
        </div>
        <div className="gender__details">
          <input type="radio" name="gender" id="dot-1" value="male" onChange={handleGenderChange} />
          <input type="radio" name="gender" id="dot-2" value="female" onChange={handleGenderChange} />
          <input type="radio" name="gender" id="dot-3" value="preferNotToSay" onChange={handleGenderChange} />
          <span className="gender__title">Gender</span>
          <div className="category">
            <label htmlFor="dot-1">
              <span className="dot one"></span>
              <span>Male</span>
            </label>
            <label htmlFor="dot-2">
              <span className="dot two"></span>
              <span>Female</span>
            </label>
            <label htmlFor="dot-3">
              <span className="dot three"></span>
              <span>Prefer not to say</span>
            </label>
          </div>
        </div>
        <div className="button">
          <input type="submit" value="Register" />
        </div>
      </form>
    </div>
  );
};

export default Form;