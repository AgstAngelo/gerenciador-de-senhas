import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './pages/Login'
import Profile from './pages/Profile'
import Register from './pages/Register'
import About from './pages/About'

import GlobalStyle from './styles/global'

function App() {
  return (
    <>
    <GlobalStyle/>

      <header>WallPass - gerenciador de senhas</header>
      
      <nav>
        <Link to="/profile"> Sua conta </Link>
        <Link to="/about"> Sobre </Link>
        <Link to="/register"> Registrar </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
      </Routes>
      
      <footer> Todos os direitos reservados </footer>

    </>
  )
}

export default App;
