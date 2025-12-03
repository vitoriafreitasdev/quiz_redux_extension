
/* eslint-disable react-hooks/exhaustive-deps */

import "./UsersScore.css"
import { type AppDispatch, type RootState } from "../redux/store.ts"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getQuizUsers } from "../redux/slices/quizSlice.ts"
import { Link } from "react-router-dom"


const UsersScores = () => {
  const dispatch = useDispatch<AppDispatch>()  
  const usersBiggestScore = useSelector((state: RootState) => state.quiz.usersBiggestScore)

  useEffect(() => {
    dispatch(getQuizUsers())
  }, [])

  // fazer mais testes para ve se tem algum bug
  return (
    <div className="maiores-pontuadores-div">
      <h3>Maiores pontuações</h3>
      {usersBiggestScore && 
      <table className="tabela-maiores-pontuadores">
            <thead className="tabela-header">
              <tr className="tr-tabela">
                <th><strong>Nome do usuário</strong></th>
                <th><strong>Nome do quiz</strong></th>
                <th><strong>Pontuação</strong></th>
              </tr>
            </thead>
          {usersBiggestScore.map((user) => (
            <tbody>
              <tr className="tr-tabela">
                <td>
                  {user.name}
                </td>
                <td>
                  {user.score}
                </td>
                <td>
                  {user.quizName}
                </td>
              </tr>
            </tbody>
            
          ))}
      
      </table>
      }
      
      <button className="backToHome" >
        <Link to="/" className="links">Voltar para Home</Link>
      </button>
    </div>
  )
}

export default UsersScores