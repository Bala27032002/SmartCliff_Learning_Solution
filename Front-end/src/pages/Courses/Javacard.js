import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import ProgramIcon from '../../images/About2.png';

const Card = () => {
  return (
    <Container Width="10rem">
      <Box
        display="flex"
        alignItems="center"
        border="1px solid black"
        p={2}
        height="10rem"
      >
        <Typography variant="h6" component="h2">
          CERTIFICATE IN
        </Typography><br/>
        <Typography variant="h5" component="h2" sx={{ ml: 1 }}>
          Java Full Stack Program
        </Typography>
        <Box
          flex="1"
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          pl={2}
        >
          <img
            src={ProgramIcon}
            alt="Program Icon"
            style={{ height: '100%', objectFit: 'cover',width:'10rem',position:'relative',right:'10rem' }}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Card;
