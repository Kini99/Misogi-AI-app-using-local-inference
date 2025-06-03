import React, { useState } from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import PromptInput from './components/PromptInput';
import OutputDisplay from './components/OutputDisplay';
import TemperatureSlider from './components/TemperatureSlider';

function App() {
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const [temperature, setTemperature] = useState(0.7);

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          AI Writer
        </Typography>
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <PromptInput
            onGenerate={(content) => setOutput(content)}
            setLoading={setLoading}
            temperature={temperature}
          />
          <TemperatureSlider
            value={temperature}
            onChange={(value) => setTemperature(value)}
          />
        </Paper>
        <OutputDisplay output={output} loading={loading} />
      </Box>
    </Container>
  );
}

export default App;
