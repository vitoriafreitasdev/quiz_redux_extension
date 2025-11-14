
import "./Fim.css"
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store.ts"
import { backToStart, correctingAnswers } from "../redux/slices/quizSlice.ts"
import { useEffect } from "react"

const Fim = () => {
    const dispatch = useDispatch<AppDispatch>()  
    const correctAnswer = useSelector((state: RootState) => state.quiz.correctAnswer)
    const wrongAnswer = useSelector((state: RootState) => state.quiz.wrongAnswer)
    const porcetagemAcerto = useSelector((state: RootState) => state.quiz.porcentagemDeAcerto)


   useEffect(() => {
    dispatch(correctingAnswers())
   }, [])

  return (
    <div className="results-container">
        <div>
          <h2>Resultados Finais</h2>
          <table>
            <tr className="title">
              <th><strong>Questões erradas</strong> </th>
              <th><strong>Questões acertadas</strong></th>
              <th><strong>Porcentagem de acerto</strong></th>
            </tr>
            <tr className="content">
              <td className="erradas">{wrongAnswer}</td>
              <td className="acertos">{correctAnswer}</td>
              <td className="acertos">{porcetagemAcerto}%</td>
            </tr>
          </table>
          <button className="backToHome" onClick={() => dispatch(backToStart())}>Voltar para o início</button>
        </div>
    </div>
  )
}

export default Fim