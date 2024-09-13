import React, { useState, useEffect } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  IconButton,
  TextField,
  MenuItem,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import axios from "axios";

const InstershipEnquiry = ({
  buttonSize = "small",
  buttonColor = "primary",
  buttonBgColor = "",
  buttonVariant = "contained",
  buttonName = "Enquiry",
  service="",
}) => {
  const regexValidations = {
    name: /^[A-Za-z ]+$/,
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    mobile: /^[6-9]\d{9}$/,
    message: /^[A-Za-z\s\.,!?]+$/,
    service: /^.*$/,
  };

  const validateField = (fieldName, fieldValue) => {
    return regexValidations[fieldName].test(fieldValue);
  };

  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
    service: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
    mobile: "",
    service: "",
  });

  const url = "http://localhost:5000/serviceform";

  const handleInputChange = async (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    const isValid = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: isValid ? "" : "Invalid format.",
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let isValid = true;
    const newErrors = {};

    for (const key in formData) {
      if (formData[key].trim() === "") {
        newErrors[key] = "This field is required.";
        isValid = false;
      } else if (!validateField(key, formData[key])) {
        newErrors[key] = "Invalid format.";
        isValid = false;
      }
    }

    setErrors(newErrors);

    if (isValid) {
        console.log(formData)
      try {
        const response = await axios.post(url, formData);
        if (response.status === 200) {
          console.log("Service Enquiry submitted successfully");
        }
      } catch (error) {
        console.error("Error submitting service enquiry:", error);
      }

      setFormData({
        name: "",
        email: "",
        message: "",
        mobile: "",
        service: "", // Reset the service field
      });

      setOpen(false);
    }
  };

  const handleOpen = () => {
    setFormData((prevFormData)=>({
      ...prevFormData,
      service: service,
    }));
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const serviceOptions = [
    "MCA Program",
    "Lateral Training",
    "HTD Model",
    "Institution Training",
    "Internship"
  ];

  const buttonStyle = {
    fontSize: buttonSize,
    minWidth: buttonSize === "large" ? "150px" : "100px",
    color: buttonColor,
    backgroundColor: buttonBgColor,
    "&:hover": {
      backgroundColor: buttonBgColor,
    },
  };

  return (
    <div>
      <Button style={{background:'#66023b',color:'white',position:'relative',bottom:'4.7rem',left:'-0.7rem',width: "100px", height: "40px",fontFamily:'serif'}}
        variant={buttonVariant}
        onClick={handleOpen}
        sx={buttonStyle}
        disabled={false}
      >
        {buttonName}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="enquiry-dialog-title"
      >
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: "8px",
            top: "8px",
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogTitle id="enquiry-dialog-title" style={{color:'#66023b',fontWeight:'600',fontFamily:'serif',fontSize:'1.7rem'}}>Service Enquiry Form</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the details below and submit your service enquiry.
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              fullWidth
              error={errors.name !== ""}
              helperText={errors.name}
              onBlur={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              fullWidth
              error={errors.email !== ""}
              helperText={errors.email}
              onBlur={handleInputChange}
            />
            <TextField
              margin="dense"
              label="Mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleInputChange}
              type="text"
              fullWidth
              error={errors.mobile !== ""}
              helperText={errors.mobile}
              onBlur={handleInputChange}
            />
            <TextField
              select
              margin="dense"
              label="Service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              fullWidth
              error={errors.service !== ""}
              helperText={
                errors.service !== ""
                  ? errors.service
                  : formData.service.trim() === ""
                  ? "Please select a service."
                  : ""
              }
              onBlur={handleInputChange}
            >
              {serviceOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              margin="dense"
              label="Enquiry"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              multiline
              rows={4}
              fullWidth
              error={errors.message !== ""}
              helperText={errors.message}
              onBlur={handleInputChange}
            />

            <DialogActions>
              <Button type="submit" style={{background:'#66023b',color:'white'}}>
                Submit
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default InstershipEnquiry;