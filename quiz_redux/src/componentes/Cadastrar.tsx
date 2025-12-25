
import { useState } from "react"
import "./Cadastrar.css"
import UseLogCad from "../hooks/useLogCad"
import { useNavigate } from "react-router-dom"


const Cadastrar = () => {
  const navigate = useNavigate()

  const [nome, setNome] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [senha, setSenha] = useState<string>("")
  const [confirmarSenha, setConfirmarSenha] = useState<string>("")
  const [mensagem, setMensagem] = useState<string | null>(null) 
  const dadosDoUsuario = {
    name: nome,
    email: email,
    password: senha,
    confirmPassword: confirmarSenha
  }

  const {message, sendData} = UseLogCad("/cadastro", dadosDoUsuario)
  
  const cadastrar = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if(dadosDoUsuario.password != dadosDoUsuario.confirmPassword){
      setMensagem("Senhas diferentes")
      return
    }

    if (dadosDoUsuario.name.length == 0) {
      setMensagem("Preencha todos os campos")
      return
    }
    if (dadosDoUsuario.email.length == 0) {
      setMensagem("Preencha todos os campos")
      return
    }
    if (dadosDoUsuario.password.length == 0) {
      setMensagem("Preencha todos os campos")
      return
    }
    if (dadosDoUsuario.confirmPassword.length == 0) {
      setMensagem("Preencha todos os campos")
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailIsValid = emailRegex.test(email);

    if(!emailIsValid) {
      setMensagem("E-mail inválido")
      return
    }

    const user = sendData()
    setMensagem(message)
    user.then((data) => {   
      if(data) navigate(`/${data.creation._id}/inicio`)
    })
  }
  return (
    <div className="cad-div">
      {mensagem && <p className="message">{mensagem}</p>}
      <form className="cad-form">
        <div className="form-div">
          <p>Nome: </p>
          <input type="text" onChange={(e) => setNome(e.target.value)}/>
        </div>
        <div className="form-div">
          <p>E-mail: </p>
          <input type="email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-div">
          <p>Senha: </p>
          <input type="password" onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <div className="form-div">
          <p>Confirmar senha: </p>
          <input type="password" onChange={(e) => setConfirmarSenha(e.target.value)}/>
        </div>
        <input type="submit" value="Cadastrar" className="cad-submit" onClick={cadastrar}/>
      </form>
      
    </div>
  )
}

export default Cadastrar