const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const OpenAI = require('openai')
app.use(express.static('dist'))

app.use(express.json())
app.use(cors())

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
})

const runPrompt = async (subject) => {
  const prompt = `Write me a 5 question quiz for my quiz app 
    where users can use the subject for the quiz. Users written subject is: ${subject} 
    write the answer in JSON format, the answer needs to have CREATIVE quizTitle, 
    an array of questions and each question has array of 4 answers, 
    and each question has correctAnswer field. Answer needs to only have this 
    JSON object and nothing else. NOTE: Give the answer in raw JSON Format dont put 
    any extra characters or strings in the beginning or end. Here is an example: 
    {
      "quizTitle": "Hockey Quiz",
      "questions": [
        {
          "question": "1. What is the name of the trophy awarded to the NHL champions?",
          "answers": [
            "Stanley Cup",
            "Calder Cup",
            "Hart Trophy",
            "Vezina Trophy"
          ],
          "correctAnswer": "Stanley Cup"
        },
        {
          "question": "2. How many players from each team are on the ice in a standard game (excluding goalies)?",
          "answers": [
            "5 players",
            "4 players",
            "6 players",
            "7 players"
          ],
          "correctAnswer": "5 players"
        },
        ...
      ]
    } 
    If the users subject is inappropriate or can't be done answer error in JSON
    `

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1000,
      temperature: 1,
    })
    return response.choices[0].message.content
  } catch (error) {
    return '{"error": "Something went wrong! Try again."}'
  }
}

app.post('/api/prompt', async (request, response) => {
  const subject = request.body.subject
  const quiz = await runPrompt(subject)

  let parsed = null
  try {
    parsed = JSON.parse(quiz)
  } catch (error) {
    parsed = '{"error": "Parsing error"}'
  }
  response.json(parsed)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})