import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useHistory } from 'react-router-dom'; 

const HomeCrud = ({ onUpdateTasks, onCloseModal }) => {
  const [bannerImage, setBannerImage] = useState('');
  const [bannerText, setBannerText] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const url = 'http://localhost:5000/homedata';

  const validateForm = () => {
    const newErrors = {};

    if (bannerText.trim() === '') {
      newErrors.bannerText = 'Heading is required';
    }

    if (bannerImage.trim() === '') {
      newErrors.bannerImage = 'Image URL is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleBannerTextChange = (e) => {
    setBannerText(e.target.value);
  };

  const handleBannerImageChange = (e) => {
    setBannerImage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const newTask = {
        home_text: bannerText,
        home_banner: bannerImage,
      };
      try {
        const response = await axios.post(url, newTask);
        console.log('Task added successfully:', response.data);
        setBannerText('');
        setBannerImage('');
        onUpdateTasks(); // Call the prop function to update data in Home
        setIsFormSubmitted(true);
      } catch (error) {
        console.error('Failed to add task:', error);
      }
    }
  };
  return (
    <section className="add-courses-section">
      {isFormSubmitted ? (
        <div className="welcome-message">
          <h3>Welcome! Your course has been added.</h3>
        </div>
      ) : (
        <div className="form-container" style={{ position: 'relative' }}>
          <h4 style={{ fontFamily: 'serif', fontWeight: '700', alignItems: 'center', textAlign: 'center' }}>
            Admin Page
            <IconButton
              sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                color: 'white',
              }}
              onClick={onCloseModal}
            >
              <CloseIcon />
            </IconButton>
          </h4>
          <br />
          <form className="form" style={{ width: '32rem', position: 'relative' }}>
            <label className="form-label">Heading</label>
            <input
              type="text"
              className="form-input"
              name="coursesName"
              placeholder="Title"
              value={bannerText}
              onChange={handleBannerTextChange}
              // onChange={handleInputChange}
              // onBlur={validateForm}
            />
          

            <label className="form-label">Image_url </label>
            <textarea
              style={{ height: '6rem' }}
              type="text"
              className="form-input"
              name="description"
              placeholder="Description"
              value={bannerImage}
              onChange={handleBannerImageChange}
              // onChange={handleInputChange}
              // onBlur={validateForm}
            />

{/* 
            <label className="form-label">Duration</label>
            <input
              type="text"
              className="form-input"
              name="duration"
              placeholder="Total Time (e.g., 12ABCD)"
              value={duration}
              onChange={handleInputChange}
              onBlur={validateForm}
            />
            {errors.duration && <span className="error">{errors.duration}</span>} */}

          

            <div style={{ textAlign: 'end' }}>
              <Button className="add-courses-button" type="submit" onClick={handleSubmit}>
                Add Details
              </Button>
            </div>
          </form>
        </div>
      )}
    </section>
  );
};

export default HomeCrud;
