import { useState } from 'react'
import './App.css'
import Alert from 'react-bootstrap/Alert'
import QuizForm from './components/QuizForm'
import QuestionForm from './components/QuestionForm'
import QuizFinish from './components/QuizFinish'

const App = () => {
  const [quiz, setQuiz] = useState(null)
  const [finished, setFinished] = useState(false)
  const [answers, setAnswers] = useState([])
  const [alert, setAlert] = useState('')

  const currentQuiz = quiz

  return (
    <div className='container'>
      <div style={{'marginBottom': '50px'}}>
        <h1>QuizPT</h1>
        <p>ChatGPT powered quizzer</p>
      </div>
      {!quiz && <QuizForm setQuiz={ setQuiz } />}
      {alert &&
        <Alert variant='danger'>
          {alert}
        </Alert>
      }
      {!finished && quiz &&
        <>
          <h1 style={{'textAlign': 'left'}}>{currentQuiz.quizTitle}</h1>
          <QuestionForm
            quiz={currentQuiz}
            answers={answers}
            setAnswers={setAnswers}
            setFinished={setFinished}
            setAlert={setAlert}
          />
        </>
      }
      {finished &&
        <QuizFinish
          quiz={currentQuiz}
          setAnswers={setAnswers}
          answers={answers}
          setFinished={setFinished}
          setQuiz={setQuiz}
        />
      }
    </div>
  )
}

export default App
