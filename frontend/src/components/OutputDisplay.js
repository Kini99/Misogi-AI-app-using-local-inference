import React from 'react';
import { Paper, Typography, CircularProgress, Box } from '@mui/material';

const OutputDisplay = ({ output, loading }) => {
  return (
    <Paper elevation={3} sx={{ p: 3, minHeight: '200px' }}>
      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="200px">
          <CircularProgress />
        </Box>
      ) : output ? (
        <Typography variant="body1" component="div" sx={{ whiteSpace: 'pre-wrap' }}>
          {output}
        </Typography>
      ) : (
        <Typography variant="body1" color="text.secondary" align="center">
          Generated content will appear here...
        </Typography>
      )}
    </Paper>
  );
};

export default OutputDisplay; 