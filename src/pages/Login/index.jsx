import React from 'react'
import {Sloginbox} from './styles'

function Login() {
  return (  
    <Sloginbox>
      <form>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>AllPass</label>
          <input type="text" />
        </div>
      </form>
    </Sloginbox>
  )
}

export default Login