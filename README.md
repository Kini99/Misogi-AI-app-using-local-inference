# AI Writer App

A simple AI-powered writing assistant that generates blog intros, tweets, and stories from given topics using TinyLlama running locally.

## Features

- Generate blog introductions
- Create tweets
- Write short stories
- Adjustable temperature settings
- Real-time output display
- Local model inference
- Output logging
- MongoDB storage for generated content

## Tech Stack

- Frontend: React.js
- Backend: Node.js with Express.js
- Database: MongoDB
- TinyLlama 1.1B Chat Model
- Ollama for local model serving

## Prerequisites

- Node.js 18+ installed
- MongoDB installed and running
- Ollama installed and running locally
- TinyLlama model pulled in Ollama

## Setup Instructions

1. Clone this repository:
```bash
git clone <your-repo-url>
cd <repo-name>
```

2. Install dependencies for both frontend and backend:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory with:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ai-writer
OLLAMA_API_URL=http://192.168.29.90:1234
```

4. Start the backend server:
```bash
cd backend
npm run dev
```

5. Start the frontend development server:
```bash
cd frontend
npm start
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Model Information

This app uses TinyLlama 1.1B Chat model running locally through Ollama. The model is served at http://192.168.29.90:1234.

## Usage

1. Select the type of content you want to generate (blog intro, tweet, or story)
2. Enter your topic or prompt
3. Adjust the temperature if desired (higher values = more creative, lower values = more focused)
4. Click "Generate" and wait for the response
5. View the generated content and copy it if needed
6. Generated content is automatically saved to MongoDB

## Project Structure

```
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── PromptInput.js
│   │   │   ├── OutputDisplay.js
│   │   │   └── TemperatureSlider.js
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── backend/
│   ├── models/
│   │   └── Generation.js
│   ├── routes/
│   │   └── api.js
│   ├── controllers/
│   │   └── generationController.js
│   ├── server.js
│   └── package.json
│
└── README.md
```