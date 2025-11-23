
import "./Inicial.css"

import {  useDispatch } from "react-redux"
import { type AppDispatch } from "../redux/store.ts"
import { startGame } from "../redux/slices/quizSlice.ts"
interface userId {
  id: string
}
const Inicial = (id: userId) => {
  const dispatch = useDispatch<AppDispatch>()

  const iniciarJogo = (quizName: string) => {
    dispatch(startGame({quiz: quizName, id: id.id}))
  }
  return (
    <div className="inicial">
      <div className="imagem"></div>
      <div className="conteudo">
        <div>
          <h2>Quiz de JavaScript/React | Python</h2>
          <button onClick={() => iniciarJogo("javascript")} className="buttonIniciar">INICIAR QUIZ JAVASCRIPT/REACT</button>
          <button onClick={() => iniciarJogo("python")} className="buttonIniciar">INICIAR QUIZ PYTHON</button>
        </div>
      </div>
      
    </div>
  )
}

export default Inicial