import { Box, Typography } from '@mui/material';

const TrainingProgram = () => {
  return (
    <Box display="grid" gridTemplateColumns="1fr 1fr" gridTemplateRows="repeat(2, 1fr)" gap="1rem" height="10rem" width="100%">
      <Box bgcolor="#f0f0f0" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h6">Regular Training Program</Typography>
        <Typography variant="body2">Duration: 3 Months</Typography>
        <Typography variant="body2">Hours: 4 Hrs / Day</Typography>
      </Box>
      <Box bgcolor="#e0e0e0" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h6">Fast Track Training Program</Typography>
        <Typography variant="body2">Duration: 14 days (2 Weeks)</Typography>
        <Typography variant="body2">Hours: 6 Hrs / Day</Typography>
      </Box>
      <Box bgcolor="#d0d0d0" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h6">100% Job Assistance</Typography>
      </Box>
      <Box bgcolor="#c0c0c0" display="flex" alignItems="center" justifyContent="center">
        <Typography variant="h6">Live Projects Training</Typography>
      </Box>
    </Box>
  );
};

export default TrainingProgram;
