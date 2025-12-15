

import "./Inicial.css"
import { useDispatch } from "react-redux"
import { type AppDispatch } from "../redux/store"
import { startGame } from "../redux/slices/quizSlice"
import type { userData } from "../hooks/useFIndUser"


interface InicialProps {
  id: string
  user: userData | null
}

const Inicial = ({ id, user }: InicialProps) => {
  const dispatch = useDispatch<AppDispatch>()


  const iniciarJogo = (quizName: string) => {
    dispatch(startGame({ quiz: quizName, id }))
  }


  return (
    <div className="inicial">
      <div className="imagem"></div>
      <div className="conteudo">
        <div className="dadosDoUsuario">
            <h3>JavaScript</h3>
            {user && <p className="maior"><strong>Maior pontuação: </strong>{user.js.maxScore}</p>}
            {user && <p className="atual"><strong>Pontuação atual: </strong>{user.js.score}</p>}
            <h3>Python</h3>
            {user && <p className="maior"><strong>Maior pontuação: </strong> {user.py.maxScore}</p>}
            {user && <p className="atual"><strong>Pontuação atual: </strong> {user.py.score}</p>}
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
