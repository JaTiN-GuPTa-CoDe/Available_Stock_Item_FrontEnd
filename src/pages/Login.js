import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../css/Login.css';

function Login() {
  return (
    <>
      <NavBar />
      <div className="center-wrapper">
        <div className="box">
          <div className="form">
            <h2>Login</h2>
            <div className="inputBox">
              <input type="text" required="required" />
              <span>Email</span>
              <i></i>
            </div>
            <div className="inputBox">
              <input type="password" required="required" />
              <span>Password</span>
              <i></i>
            </div>
            <div className="links">
              {/* <a href="https://akhs1.com/">Forgot password?</a> */}
              <Link to="/signup">Sign Up</Link>
            </div>
            <a><input type="submit" value="Login" /></a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
