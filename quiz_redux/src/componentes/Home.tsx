import "./Home.css"
import { Link } from "react-router-dom"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import UseLogCad from "../hooks/useLogCad"

const Home = () => {

  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")

  const navigate = useNavigate()
  const dados = {
      email: email,
      password: senha
  }
  const {message, sendData} = UseLogCad("/login", dados)

  const handleLogin = () => {
    const data = sendData()
    data.then((d) => {
      navigate(`/${d.id}/inicio`)
    })
    

  }
 
  return (
    <div className="home-div">
      <div className="container">
        <div className="home-image"></div>
        <div className="home-conteudo">
          <div className="home-login">
              {message && <p>{message}</p>}
              <h3>E-mail: </h3>
              <input type="email" onChange={(e) => setEmail(e.target.value)}/>
              <h3>Senha: </h3>
              <input type="password" onChange={(e) => setSenha(e.target.value)}/>
              <button className="loginBtn" onClick={handleLogin}>Login</button>
          </div>
          <button className="buttonCad"><Link className="linkToCad" to="/cadastrar">Cadastrar</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Home