import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import { FaCheck } from "react-icons/fa"
import { FaXmark } from "react-icons/fa6"

const QuizFinish = ({ quiz, setAnswers, answers, setFinished, setQuiz }) => {
  const [index, setIndex] = useState(0)

  let rightAnswers = 0
  for (let i = 0; i < answers.length && i < quiz.questions.length; i++) {
    if (quiz.questions[i].correctAnswer === answers[i]) {
      rightAnswers++
    }
  }

  const handleNext = () => {
    if (index + 1 === answers.length) {
      setFinished(false)
      setQuiz(null)
      setIndex(0)
      setAnswers([])
      return null
    } else {
      setIndex(index + 1)
    }
  }

  const handlePrevious = () => {
    if (index >= 0) {
      setIndex(index - 1)
    }
  }

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  return (
    <div style={{'textAlign': 'left'}}>
      <h1>
        You got {rightAnswers}/{quiz.questions.length} on this quiz!
      </h1>
      <div>
        <p>{quiz.questions[index].question}</p>
        {quiz.questions[index].answers.map((answer) => (
          <p key={answer}>
            {answer}
            {answer === answers[index] && (answers[index] === quiz.questions[index].correctAnswer ? <FaCheck /> : <FaXmark />)}
          </p>
        ))}
        <p>
          {answers[index] === quiz.questions[index].correctAnswer
            ? `Your answer: ${answers[index]} was correct!`
            : `Your answer: ${answers[index]} was wrong! Correct answer is ${quiz.questions[index].correctAnswer}`}
          </p>
        <div style={buttonContainerStyle}>
          <Button onClick={handleNext} variant="secondary">
            {(index + 1 === quiz.questions.length) ? 'Finish' : 'Next'}
          </Button>
          {index > 0 &&
            <Button onClick={handlePrevious} variant="secondary">
              Previous
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default QuizFinish