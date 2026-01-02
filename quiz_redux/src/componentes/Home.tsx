
import "./Home.css"
import { Link } from "react-router-dom"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import UseLogCad from "../hooks/useLogCad"

const Home = () => {

  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const [mensagem, setMensagem] = useState<string | null>(null)
  const dados = {
      email: email,
      password: senha
  }
  const {setMessage, message, sendData} = UseLogCad("/login", dados)

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      setMensagem(null)
    }, 1500)
  }, [mensagem])
  
  useEffect(() => {
    setTimeout(() => {
      setMessage(null)
    }, 1500)
  }, [message, setMessage])

  const handleLogin = () => {
    const data = sendData()
    setMensagem("Carregando...")
    data.then((d) => {
      if(d){
        navigate(`/${d.id}/inicio`)
      }
    
    })
    setMensagem(null)
  }
 
  return (
    <div className="home-div">
      <div className="container">
        <div className="home-image"></div>
        <div className="home-conteudo">
          <div className="home-login">
              {message && <>{message}</>}
              {mensagem && <>{mensagem}</>}
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