import React from 'react';
import form from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import useAuth from '../../hooks/useAuth';

function Login() {
  const {user,signInUsingGoogle}=useAuth();
  return (
    <div className='login-form'>
       <div>
           <h2>Login</h2>
           <form onSubmit="">
                <input type='email' placeholder='Your email'></input>
                <br></br>
                <input type='password' placeholder='password here'></input>
                <br></br>
                <br></br>
                <input type="submit" value='submit' />
            </form>    
            <p>New to ema-john?<Link to='/register'>Create Account</Link></p>

            <h3>--------or---------</h3>
            <button className='btn-regular'
              onClick={signInUsingGoogle}
              >Google Sign In</button>
       </div>
    </div>
  )
}

export default Login