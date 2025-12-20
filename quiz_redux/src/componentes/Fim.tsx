/* eslint-disable @typescript-eslint/no-unused-vars */

import "./Fim.css"
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store.ts"
import { addScore, backToStart, correctingAnswers } from "../redux/slices/quizSlice.ts"
import { useEffect, useCallback } from "react"
import { Link } from "react-router-dom"

interface MeioProps {
  id: string
}

const Fim = ({id}: MeioProps) => {
    const dispatch = useDispatch<AppDispatch>()  
    const correctAnswer = useSelector((state: RootState) => state.quiz.correctAnswer)
    const wrongAnswer = useSelector((state: RootState) => state.quiz.wrongAnswer)
    const finishAddingScore = useSelector((state: RootState) => state.quiz.finishAddingScore)
    const correctingComplete = useSelector((state: RootState) => state.quiz.correctingComplete)
    const porcetagemAcerto = useSelector((state: RootState) => state.quiz.porcentagemDeAcerto)
    const quizName = useSelector((state: RootState) => state.quiz.quizName)

    // Função para enviar score
    const sendScoreToBackend = useCallback(async () => {
      if (correctAnswer > 0 && quizName && id) {
        try {
          const score: number = correctAnswer * 5
          const quiz = quizName === "python" ? "python" : "js"
          
          const data = {
            url: `/${id}/${quiz}`,
            uptate: {
              score: score
            }
          }

          await dispatch(addScore(data))
        } catch (error) {
          console.log("Erro ao enviar score: ", error)
        }
      }
    }, [correctAnswer, quizName, id, dispatch])

    useEffect(() => {
      // Primeiro, faz a correção
      dispatch(correctingAnswers())
      
      // Depois de um pequeno delay para garantir que o Redux atualizou
      const timer = setTimeout(() => {
        sendScoreToBackend()
      }, 100) // 100ms é suficiente para o Redux processar
        
      return () => clearTimeout(timer)
    }, [dispatch, sendScoreToBackend])

   const backingToStart = () => {
    dispatch(backToStart())
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

        {finishAddingScore && 
        <div>
          <button className="backToHome" onClick={backingToStart}>
            Voltar para o início
          </button>
          <button className="backToHome">
            <Link className="links" to="/usersScore">Mostrar as maiores pontuações dos usuários.</Link>
          </button>
        </div>
        }
      </div>
    </div>
  )
}

export default Fim