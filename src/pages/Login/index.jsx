import React, {useState} from 'react'
import  { StyledLogin } from './styles'


function Login(props) {

  const [loginValues, setLoginValues] = useState({
    username: "",
    password: ""
  })

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginValues.username);
  }

  return (  
    <StyledLogin onSubmit={handleLogin}>
      
      <p>Login</p>
      <div>
        <label>
          Username
          <input 
          type="text" 
          name="username"
          value={loginValues.username}
          onChange={(e) => setLoginValues({...loginValues, username: e.target.value})}
          />
        </label>
      </div>
      
      <div>
        <label>
          All Pass
          <input 
          type="text" 
          name="password"
          value={loginValues.password}
          onChange={(e) => setLoginValues({...loginValues, password: e.target.value})}
          />
        </label>
      </div>
      <button>Enter</button>
      
    </StyledLogin>
  )
}

export default Login;