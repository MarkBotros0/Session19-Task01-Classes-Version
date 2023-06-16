import React, { Component } from 'react';
import { Box, Typography } from '@mui/material';

class Profiles extends Component {
  render() {
    return (
      <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: "600px" }}>
        <Typography variant='h4'>This is the profiles Route</Typography>
      </Box>
    );
  }
}

export default Profiles;
