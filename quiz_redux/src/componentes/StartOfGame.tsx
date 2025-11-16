import { useSelector } from "react-redux"
import { type RootState } from "../redux/store.ts"
import Fim from "./Fim"
import Inicial from "./Inicial"
import Meio from "./Meio"


const StartOfGame = () => {
  const stage = useSelector((state: RootState) => state.quiz.gamestages)
  return (
    <div>
      {stage === "inicial" && <Inicial/>}
      {stage === "meio" && <Meio/>}
      {stage === "fim" && <Fim/>}
    </div>
  )
}

export default StartOfGame