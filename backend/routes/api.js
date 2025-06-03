const express = require('express');
const router = express.Router();
const generationController = require('../controllers/generationController');

// Generate new content
router.post('/generate', generationController.generateContent);

// Get recent generations
router.get('/generations', generationController.getGenerations);

module.exports = router; 