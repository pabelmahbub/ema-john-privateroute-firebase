import React from 'react';
import form from 'react';
import { Link } from 'react-router-dom';
import './Register.css'

function Register() {
  return (
    <div className='register-form'>
       <div>
           <h2>Create New Account</h2>
           <form onSubmit="">
                <input type='email' placeholder='Your email'></input>
                <br></br>
                <br></br>
                <input type='password' placeholder='password here'></input>
                <br></br>
                <br></br>
                <input type='password' placeholder='re-enter password here'></input>
                <br></br>
                <br></br>
                <input type="submit" value='submit' />
            </form>    
            <p>Already have an account! <Link to='/login'>Login</Link></p>

            <h3>--------or---------</h3>
            <button className='btn-regular'>Google Sign In</button>
       </div>
    </div>
  )
}

export default Register;