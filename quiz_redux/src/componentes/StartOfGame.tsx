import { useSelector } from "react-redux"
import { type RootState } from "../redux/store.ts"
import Fim from "./Fim"
import Inicial from "./Inicial"
import Meio from "./Meio"
import { useParams } from "react-router-dom"
import { UseFindUser } from "../hooks/useFIndUser.tsx"

const StartOfGame = () => {
  const stage = useSelector((state: RootState) => state.quiz.gamestages)
  const {id} = useParams<string>()
  const user = UseFindUser(id)
  console.log(user)
  /* 
  fazer aparecer na tela, o atual score do usuario e max score no quiz de python e no de JS/React
  */

  return (
    <div>
      {stage === "inicial" && <Inicial id={`${id}`}/>}
      {stage === "meio" && <Meio/>}
      {stage === "fim" && <Fim/>}
    </div>
  )
}

export default StartOfGame