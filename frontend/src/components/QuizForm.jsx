import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import PropagateLoader from 'react-spinners/PropagateLoader'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { showNotification } from '../utils'

const QuizForm = ({ setAlert, setQuiz }) => {
  const [formInput, setFormInput] = useState('')
  const [subject, setSubject] = useState('')

  useEffect( () => {
    if (subject) {
      axios.post('http://localhost:3001/api/prompt', { subject })
        .then( response => {
          const data = response.data
          if (data.error) {
            showNotification(setAlert, `Something went Wront! Error: '${data.error}'`)
            setQuiz(null)
          } else {
            setQuiz(response.data)
            setSubject('')
          }
        })
        .catch( e => {
          showNotification(setAlert, 'Something went Wront!')
        })
    }
  }, [subject])

  if (subject) {
    return (
      <div style={{'marginTop': '150px'}}>
        <PropagateLoader />
      </div>
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubject(formInput)
  }

  const TextButton = ({onClick, text}) => {
    const style = {
      border: 'none',
      background: 'none'
    }
    return (
      <button style={style} onClick={onClick}>{text}</button>
    )
  }

  const onClick = () => {
    setFormInput('Capital cities of Europian countries')
  }

  return (
    <div style={{'marginTop': '120px', 'textAlign': 'left'}}>
      <TextButton onClick={onClick} text='Click this for an example.' />
      <Form onSubmit={handleSubmit}>
        <InputGroup>
          <Form.Control
            placeholder="What subject do you want to be quizzed in?"
            aria-label="What subject do you want to be quizzed in?"
            aria-describedby="basic-addon2"
            value={formInput}
            onChange={(e) => setFormInput(e.target.value)} // Update state on input change
          />
          <Button variant="outline-secondary" id="button-addon2" type="submit">
            Quiz me
          </Button>
        </InputGroup>
      </Form>
    </div>
  )
}

export default QuizForm