
import { useSelector } from "react-redux"
import { type RootState } from "../redux/store.ts"
import Fim from "./Fim"
import Inicial from "./Inicial"
import Meio from "./Meio"
import { useParams } from "react-router-dom"
import { UseFindUser, type userData } from "../hooks/useFIndUser.tsx"


const StartOfGame = () => {
  const stage = useSelector((state: RootState) => state.quiz.gamestages)
  const {id} = useParams<string>()
  const user: userData | null = UseFindUser(id)

   return (
    <div>
      {stage === "inicial" && <Inicial id={`${id}`} user={user}/>}
      {stage === "meio" && <Meio/>}
      {stage === "fim" && <Fim/>}
    </div>
  )
}

export default StartOfGame