

import "./Fim.css"
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store.ts"
import { addScore, backToStart, correctingAnswers } from "../redux/slices/quizSlice.ts"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
//import { useNavigate } from "react-router-dom"

interface MeioProps {
  id: string
}

const Fim = ({id}: MeioProps) => {
    const dispatch = useDispatch<AppDispatch>()  
    const correctAnswer = useSelector((state: RootState) => state.quiz.correctAnswer)
    const wrongAnswer = useSelector((state: RootState) => state.quiz.wrongAnswer)
    const porcetagemAcerto = useSelector((state: RootState) => state.quiz.porcentagemDeAcerto)
    const quizName = useSelector((state: RootState) => state.quiz.quizName)
    const [finishCorreting, setFinishCorreting] =  useState<boolean>(false)
   //const navigate = useNavigate()

   useEffect(() => {
      dispatch(correctingAnswers())
   }, [])

   useEffect(() => {
      
      const score: number = correctAnswer * 5
      let quiz = ""
      if(quizName === "python"){
        quiz = "python"
      }
      else {
        quiz = "js"
      }
     
      const data = {
        url: `/${id}/${quiz}`,
        uptate: {
          score: score
        }
      }

      dispatch(addScore(data))
      setFinishCorreting(true)

   }, [correctAnswer])

   const backingToStart = () => {
    dispatch(backToStart())
    //navigate("/")
   }
  return (
    <div className="results-container">
    <div>
      <h2>Resultados Finais</h2>
      <table>
        <thead>
          <tr className="title">
            <th><strong>Questões erradas</strong></th>
            <th><strong>Questões acertadas</strong></th>
            <th><strong>Porcentagem de acerto</strong></th>
          </tr>
        </thead>

        <tbody>
          <tr className="content">
            <td className="erradas">{wrongAnswer}</td>
            <td className="acertos">{correctAnswer}</td>
            <td className="acertos">{porcetagemAcerto}%</td>
          </tr>
        </tbody>
      </table>

      {finishCorreting && 
      <button className="backToHome" onClick={backingToStart}>
        Voltar para o início
      </button>}
      <button className="backToHome">
        <Link className="links" to="/usersScore">Mostrar as maiores pontuações dos usuários.</Link>
      </button>
    </div>
  </div>

  )
}

export default Fim