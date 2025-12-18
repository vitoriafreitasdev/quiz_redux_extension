
import { useSelector } from "react-redux"
import { type RootState } from "../redux/store.ts"
import Fim from "./Fim"
import Inicial from "./Inicial"
import Meio from "./Meio"
import { useParams } from "react-router-dom"
import { UseFindUser, type userData } from "../hooks/useFIndUser.tsx"

import { useDispatch } from "react-redux"
import { type AppDispatch } from "../redux/store"
import { sendUserData } from "../redux/slices/quizSlice"
import { useEffect } from "react"


const StartOfGame = () => {
  const dispatch = useDispatch<AppDispatch>()

  const {id} = useParams<string>()
  const stage = useSelector((state: RootState) => state.quiz.gamestages)
  const user: userData | null = UseFindUser(id)

  useEffect(() => {
    const data = {
      js: user?.js.score, 
      jsMax: user?.js.maxScore,
      py: user?.py.score, 
      pyMax: user?.py.maxScore,
      useMax: user?.score.score,
      quizMax: user?.score.quizName
    }
    dispatch(sendUserData(data))
  }, [user])

   return (
    <div>
      {stage === "inicial" && <Inicial/>}
      {stage === "meio" && <Meio />}
      {stage === "fim" && <Fim id={`${id}`}/>}
    </div>
  )
}

export default StartOfGame