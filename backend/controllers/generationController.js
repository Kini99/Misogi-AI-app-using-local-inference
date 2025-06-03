const axios = require('axios');
const Generation = require('../models/Generation');

const generatePrompt = (type, prompt) => {
  // For LM Studio's chat completions, we'll structure the prompt as a message
  const systemMessage = "You are an AI assistant that generates content based on user requests. Provide a clear and concise response.";
  
  let userMessage;
  switch (type) {
    case 'blog':
      userMessage = `Write an engaging blog introduction about: ${prompt}`;
      break;
    case 'tweet':
      userMessage = `Write a tweet about: ${prompt}`;
      break;
    case 'story':
      userMessage = `Write a short story about: ${prompt}`;
      break;
    default:
      userMessage = prompt;
  }

  return [
    { "role": "system", "content": systemMessage },
    { "role": "user", "content": userMessage }
  ];
};

exports.generateContent = async (req, res) => {
  try {
    const { type, prompt, temperature } = req.body;

    // Generate the appropriate messages array for LM Studio
    const messages = generatePrompt(type, prompt);

    // Call LM Studio API
    const response = await axios.post(`${process.env.OLLAMA_API_URL}/v1/chat/completions`, {
      model: 'tinyllama-1.1b-chat-v1.0', // Use the exact model ID from LM Studio
      messages: messages,
      temperature: temperature || 0.7,
      stream: false
    });

    console.log('LM Studio API response data:', response.data);

    // Extract content from LM Studio response
    const generatedContent = response.data.choices[0].message.content;

    // Save to database
    const generation = new Generation({
      type,
      prompt,
      content: generatedContent,
      temperature
    });
    await generation.save();

    res.json({
      success: true,
      content: generatedContent,
      generation
    });
  } catch (error) {
    console.error('Generation error:', error);
    res.status(500).json({
      success: false,
      message: 'Error generating content',
      error: error.message
    });
  }
};

exports.getGenerations = async (req, res) => {
  try {
    const generations = await Generation.find()
      .sort({ createdAt: -1 })
      .limit(10);
    res.json(generations);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching generations',
      error: error.message
    });
  }
}; 