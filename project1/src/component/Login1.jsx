import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Login() {
  return (
    <div className='wrapper'>
        
        <form action="">
            <h1>Login</h1>
            <div className='input-box'>
                <input type="text" placeholder='Username' required/>
                <FontAwesomeIcon icon={faUser} className='icon1'/>
            </div>
            <div className='input-box'>
                <input type="password" placeholder='Password' required/>
                <FontAwesomeIcon icon={faLock} className='icon1'/>
            </div>
            <div className='remember-forgot'>
                <label><input type="checkbox"  />Remenber me</label>
                <a href='#'>Forgot Password</a>
            </div>
            <button type="submit">Login</button>
            <div className='register-link'>
                <p>Don't have an account?<a href="#">Register</a></p>
            </div>
        </form>
    </div>
  )
}
