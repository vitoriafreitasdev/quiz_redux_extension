
import "./Inicial.css"

import {  useDispatch } from "react-redux"
import { type AppDispatch } from "../redux/store.ts"
import { startGame } from "../redux/slices/quizSlice.ts"

const Inicial = () => {
  const dispatch = useDispatch<AppDispatch>()

  const iniciarJogo = (quizName: string) => {
    dispatch(startGame(quizName))
  }
  return (
    <div className="inicial">
      <div className="imagem"></div>
      <div className="conteudo">
        <h2>Quiz de JavaScript/React | Python</h2>
        <button onClick={() => iniciarJogo("javascript")} className="buttonIniciar">INICIAR QUIZ JAVASCRIPT/REACT</button>
        <button onClick={() => iniciarJogo("python")} className="buttonIniciar">INICIAR QUIZ PYTHON</button>

      </div>
      
    </div>
  )
}

export default Inicial