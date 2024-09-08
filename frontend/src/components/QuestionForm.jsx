import { useState } from 'react'
import { showNotification } from '../utils'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

const QuestionForm = ({ quiz, setAlert, setAnswers, answers, setFinished }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [index, setIndex] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (selectedAnswer) {
      setAnswers(answers.concat(selectedAnswer))
      if (index + 1 === quiz.questions.length) {
        setIndex(0)
        setFinished(true)
        return(null)
      }
      setIndex(index + 1)
      setSelectedAnswer(null)
    } else {
      showNotification(setAlert, 'You have to select one answer!')
    }
  }

  const leftAlignStyle = {
    textAlign: 'left'
  }

  const marginStyle = {
    marginBottom: '20px'
  }

  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
  return (
    <div>
      <Form onSubmit={handleSubmit} style={leftAlignStyle}>
        <Form.Group>
          <Form.Label style={marginStyle}>{quiz.questions[index].question}</Form.Label>
          <div>
            {quiz.questions[index].answers.map((answer) => (
              <Form.Check
                type="radio"
                key={answer}
                id={answer}
                label={answer}
                name="answers"
                value={answer}
                checked={selectedAnswer === answer}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                style={marginStyle}
              />
            ))}
          </div>
        </Form.Group>
        <div style={buttonContainerStyle}>
          <Button type="submit" variant="secondary">
            {(index + 1 === quiz.questions.length) ? 'Finish' : 'Next'}
          </Button>
          <span>{`${index + 1}/${quiz.questions.length}`}</span>
        </div>
      </Form>
    </div>
  )
}

export default QuestionForm