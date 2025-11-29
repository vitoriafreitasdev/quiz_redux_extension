import "./Cadastrar.css"

const Cadastrar = () => {

  return (
    <div className="cad-div">
      <form className="cad-form">
        <div className="form-div">
          <p>Nome: </p>
          <input type="text"/>
        </div>
        <div className="form-div">
          <p>E-mail: </p>
          <input type="email"/>
        </div>
        <div className="form-div">
          <p>Senha: </p>
          <input type="password"/>
        </div>
        <div className="form-div">
          <p>Confirmar senha: </p>
          <input type="password"/>
        </div>
        <input type="submit" value="Cadastrar" className="cad-submit"/>
      </form>
      
    </div>
  )
}

export default Cadastrar