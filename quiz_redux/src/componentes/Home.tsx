import "./Home.css"

const Home = () => {

  return (
    <div className="home-div">
      <div className="container">
        <div className="home-image"></div>
        <div className="home-conteudo">
          <div className="home-login">
              <h3>E-mail: </h3>
              <input type="email" />
              <h3>Senha: </h3>
              <input type="password"/>
          </div>
          <div className="cadastrar-btn-div">
            <button>Cadastrar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home