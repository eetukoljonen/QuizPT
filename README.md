# QuizPt - ChatGPT Powered Quiz App

**QuizPt** is a simple quiz application powered by ChatGPT. Users can input a subject of their choice, and the app will generate a 5-question quiz based on that subject using OpenAI's API.

## Features

- **Custom Quiz Generation**: Users can input any subject, and QuizPt will generate a quiz with unique questions and answers related to the topic.
- **User-Friendly Interface**: The app has a clean, simple UI that guides users through the quiz-taking process.
- **Real-Time Results**: After completing the quiz, users get their results immediately.
- **Powered by OpenAI**: The app uses OpenAI's GPT to generate creative and educational quizzes.

### Frontend

The frontend is a React app that manages the user interface and handles quiz submission.

Key components:
- `QuizForm`: Handles subject input and quiz generation.
- `QuestionForm`: Displays the quiz questions and captures user answers.
- `QuizFinish`: Displays results after the user completes the quiz.

### Backend

The backend is an Express.js server that communicates with OpenAI to generate quizzes.

Key features:
- **API Endpoint**: `POST /api/prompt` takes the subject from the user, queries the OpenAI API, and returns a quiz in JSON format.
- **Error Handling**: If OpenAI cannot generate a quiz or the input is inappropriate, a structured error response is returned.

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- OpenAI API key

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/QuizPt.git
   cd QuizPt
   ```
2. Install dependencies for the backend:
   ```bash
   cd backend
   npm install
   ```
3. Create a .env file in the backend directory with your OpenAI API key:
   ```bash
   API_KEY=your_openai_api_key
   ```
4. Run the app:
   ```bash
   npm start
   ```
5. Access the app by visiting:
   ```bash
   http://localhost:3001
   ```

### Usage

1. Enter a subject (e.g., "History", "Science") in the quiz form.
2. A quiz with 5 questions will be generated based on the subject.
3. Answer the questions.
4. After submitting, view your results.

Here is the prompt:
<img width="1039" alt="Screenshot 2024-09-08 at 14 14 08" src="https://github.com/user-attachments/assets/765922ba-9936-4a68-9412-a1348b984555">
Here is what the quiz looks like:
<img width="1035" alt="Screenshot 2024-09-08 at 14 14 27" src="https://github.com/user-attachments/assets/9a7e74ca-f5cd-4789-b2a0-85eac76b25f6">

