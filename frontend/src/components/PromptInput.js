import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import axios from 'axios';

const PromptInput = ({ onGenerate, setLoading, temperature }) => {
  const [prompt, setPrompt] = useState('');
  const [type, setType] = useState('blog');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/generate', {
        type,
        prompt,
        temperature,
      });
      onGenerate(response.data.content);
    } catch (error) {
      console.error('Error generating content:', error);
      onGenerate('Error generating content. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 3 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Content Type</InputLabel>
        <Select
          value={type}
          label="Content Type"
          onChange={(e) => setType(e.target.value)}
        >
          <MenuItem value="blog">Blog Introduction</MenuItem>
          <MenuItem value="tweet">Tweet</MenuItem>
          <MenuItem value="story">Short Story</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        multiline
        rows={3}
        label="Enter your topic or prompt"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        sx={{ mb: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        disabled={!prompt.trim()}
      >
        Generate
      </Button>
    </Box>
  );
};

export default PromptInput; 