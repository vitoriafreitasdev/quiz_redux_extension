/* eslint-disable @typescript-eslint/no-unused-vars */
import "./UsersScore.css"
import { type AppDispatch, type RootState } from "../redux/store.ts"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getQuizUsers } from "../redux/slices/quizSlice.ts"

const UsersScores = () => {
  const dispatch = useDispatch<AppDispatch>()  
    const users = useSelector((state: RootState) => state.quiz.users)

  useEffect(() => {
    dispatch(getQuizUsers())
  }, [])

  return (
    <div>UsersScores</div>
  )
}

export default UsersScores