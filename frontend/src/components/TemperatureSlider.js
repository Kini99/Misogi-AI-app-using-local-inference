import React from 'react';
import { Box, Slider, Typography } from '@mui/material';

const TemperatureSlider = ({ value, onChange }) => {
  return (
    <Box sx={{ width: '100%', mt: 2 }}>
      <Typography gutterBottom>
        Temperature: {value.toFixed(1)}
      </Typography>
      <Slider
        value={value}
        onChange={(_, newValue) => onChange(newValue)}
        min={0}
        max={1}
        step={0.1}
        marks={[
          { value: 0, label: 'Focused' },
          { value: 0.5, label: 'Balanced' },
          { value: 1, label: 'Creative' },
        ]}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default TemperatureSlider; 