
import "./Meio.css"
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store.ts"
import { goToEnd, selectAnswer } from "../redux/slices/quizSlice.ts"


const Meio = () => {
  const dispatch = useDispatch<AppDispatch>()  
  const questions = useSelector((state: RootState) => state.quiz.questions)
  const message = useSelector((state: RootState) => state.quiz.message)

  const checkingAwswer = (question: string, answer: string, number: number) => {
    dispatch(selectAnswer({question: question, answer: answer, number: number}))   
    
  }

  return (
    <div className="main-div">
      <div className="quests-div">
        <h3>Questões</h3>
        {questions && questions.map((question, questionIndex) => (
          <div key={questionIndex} className="quest">
            <h2>{question.number}.</h2>
            <h3>{question.question}</h3>
              {question.options.map((option, optionIndex) => (
                <div key={optionIndex} className="options">
                  <input 
                    type="radio" 
                    name={`${questionIndex}`} 
                    id={`${questionIndex}${optionIndex}`}
                    value={option}
                    onChange={() => checkingAwswer(question.question, option, question.number)}
                  />
                  <label htmlFor={`${questionIndex}${optionIndex}`}>
                    {option}
                  </label>
                </div>
              ))}
          </div>
        ))}
        {message.length > 0 && <p className="message">{message}</p>}
        <button onClick={() => dispatch(goToEnd())} className="finish-btn">Finalizar</button>

        </div>
    </div>
  )
}

export default Meio