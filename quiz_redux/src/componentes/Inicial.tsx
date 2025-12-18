

import "./Inicial.css"
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store"
import { startGame } from "../redux/slices/quizSlice"
import type { user } from "../redux/slices/quizSlice"


const Inicial = () => {
  const dispatch = useDispatch<AppDispatch>()
  const userData = useSelector<RootState, user | null>((state: RootState) => state.quiz.user)
  
  const iniciarJogo = (quizName: string) => {
    dispatch(startGame({ quiz: quizName }))
  }


  return (
    <div className="inicial">
      <div className="imagem"></div>
      <div className="conteudo">
        <div className="dadosDoUsuario">
            <h3>JavaScript</h3>
            {userData && <p className="maior"><strong>Maior pontuação: </strong>{userData.jsMax}</p>}
            {userData && <p className="atual"><strong>Pontuação atual: </strong>{userData.js}</p>}
            <h3>Python</h3>
            {userData && <p className="maior"><strong>Maior pontuação: </strong> {userData.pyMax}</p>}
            {userData && <p className="atual"><strong>Pontuação atual: </strong> {userData.py}</p>}
        </div>
        <div className="buttons-h2Div">
          <h2>Quiz de JavaScript/React | Python</h2>
          <button
            onClick={() => iniciarJogo("javascript")}
            className="buttonIniciar"
          >
            INICIAR QUIZ JAVASCRIPT/REACT
          </button>

          <button
            onClick={() => iniciarJogo("python")}
            className="buttonIniciar"
          >
            INICIAR QUIZ PYTHON
          </button>
        </div>
      </div>
    </div>
  )
}

export default Inicial
