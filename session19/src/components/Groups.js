import React, { Component } from 'react';
import { Box, Typography } from '@mui/material';

class Groups extends Component {
  render() {
    return (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '600px' }}>
        <Typography variant='h4'>This is the Groups Route</Typography>
      </Box>
    );
  }
}

export default Groups;