import React from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import '../../styles/global.css'
import './styles.css'


import Login from '../Login'
import Profile from '../Profile'
import Register from '../Register'
import About from '../About'


function App() {

  const navigate = useNavigate();

  const navigateToLogin = () => {
    navigate('/Login');
  };

  const navigateToRegister = () => {
    navigate('/Register');
  };

  return (
    <>
      <header>
        <h1>GDS</h1>
        <p>Seu gerenciador de senhas pessoal e completo.</p>

        <nav>

        </nav>
      </header>

      <main>
        <section>
          <h2>Já possui uma conta?</h2>
          <button onClick={navigateToLogin}>ENTRAR</button>
          <h2>Ainda não tem o seu acesso?</h2>
          <button onClick={navigateToRegister}>CRIAR CONTA</button>
        </section>
      </main>
      {/* <nav>
        <Link to="/profile"> Sua conta </Link>
        <Link to="/about"> Sobre o GDS </Link>
        <Link to="/register"> Registrar </Link>
      </nav> */}
      
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} /> */}
      </Routes>
      
      <footer>
        Todos os direitos reservados
      </footer>

    </>
  )
}

export default App;

