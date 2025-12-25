
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
    const porcetagemAcerto = useSelector((state: RootState) => state.quiz.porcentagemDeAcerto)
    const quizName = useSelector((state: RootState) => state.quiz.quizName)

    // Função para enviar score
    /*Precisa ser callback, pois sem, a função sendScoreToBackend é recriada a cada renderização. Isso faz com que: O useEffect execute novamente a cada render (porque a referência da função muda. Pode causar loops infinitos. Múltiplos timers são criados */

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
      }, 100) 
        
      return () => clearTimeout(timer)
    }, [dispatch, sendScoreToBackend])

   const backingToStart = () => {
    dispatch(backToStart())
   }
   
   return (
    <div className="results-container">
      <div className="result-div">
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

        {finishAddingScore ?
        <div className="btns-div">
          <button className="backToHome" onClick={backingToStart}>
            Voltar para o início
          </button>
          <button className="backToHome">
            <Link className="links" to="/usersScore">Mostrar as maiores pontuações dos usuários.</Link>
          </button>
        </div> : <div><p>Carregando...</p></div>
        }
      </div>
    </div>
  )
}

export default Fim