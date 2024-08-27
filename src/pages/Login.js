import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';
import '../css/Login.css'

function Login() {
  return (
    <>
     <NavBar />
     <div class="box">
            <div class="form">
                <h2>Login</h2>
                <div class="inputBox">
                    <input type="text" required="required"/>
                    <span>Username</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required"/>
                    <span>Password</span>
                    <i></i>
                </div>
                <div class="links">
                    {/* <a href="https://akhs1.com/">Forgot password?</a> */}
                    <Link to="/signup">Sign Up</Link>
                </div>
                <a href="https://akhs1.com/"><input type="submit" value="Login"/></a>
            </div>
        </div>
      <Footer/>
    </>
  )
}

export default Login
