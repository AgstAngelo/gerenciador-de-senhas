import React, {useState} from 'react'


function Login(props) {

  const [loginValues, setLoginValues] = useState({
    userEmail: "",
    password: ""
  })

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(loginValues.username);
  }

  return(
    <section>
      <form action="" onSubmit={handleLogin}>
        <fieldset>
          <legend>Faça seu Login: </legend>
          <label htmlFor="userEmail">
            E-mail
            <input 
            type="text" 
            name="userEmail"
            value={loginValues.userEmail}
            onChange={(e) => setLoginValues({...loginValues, userEmail: e.target.value})}/>
          </label>
          <label htmlFor="password">
            Senha
            <input 
            type="password" 
            name="password"
            value={loginValues.password}
            onChange={(e) => setLoginValues({...loginValues, password: e.target.value})}
          />
          </label>
          <button type="submit">Entrar</button>
        </fieldset>
      </form>
    </section>
  );
}

export default Login;

  // const [loginValues, setLoginValues] = useState({
  //   username: "",
  //   password: ""
  // })

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   console.log(loginValues.username);
  // }

  // return (  
  //   <form onSubmit={handleLogin}>
      
  //     <p>Login</p>
  //     <div>
  //       <label>
  //         Username
  //         <input 
  //         type="text" 
  //         name="username"
  //         value={loginValues.username}
  //         onChange={(e) => setLoginValues({...loginValues, username: e.target.value})}
  //         />
  //       </label>
  //     </div>
      
  //     <div>
  //       <label>
  //         All Pass
  //         <input 
  //         type="password" 
  //         name="password"
  //         value={loginValues.password}
  //         onChange={(e) => setLoginValues({...loginValues, password: e.target.value})}
  //         />
  //       </label>
  //     </div>
  //     <button>Entrar</button>
      
  //   </form>
  // )
