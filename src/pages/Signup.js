import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import '../css/Signup.css';

function Signup() {
  return (
    <>
      <NavBar />
      <div className="center-wrapper">
      <div className="signup-box">
        <div className="signup-form">
          <h2>Sign Up</h2>
          <div className="signup-inputBox">
            <input type="text" required="required" />
            <span>Name</span>
            <i></i>
          </div>
          <div className="signup-inputBox">
            <input type="email" required="required" />
            <span>Email</span>
            <i></i>
          </div>
          <div className="signup-inputBox">
            <input type="password" required="required" />
            <span>Password</span>
            <i></i>
          </div>
          <div className="signup-inputBox">
            <input type="text" required="required" />
            <span>Shop Name</span>
            <i></i>
          </div>
          <div className="signup-inputBox">
            <input type="text" required="required" />
            <span>Address</span>
            <i></i>
          </div>
          <div className="signup-inputBox">
            <input type="number" required="required" />
            <span>Phone No</span>
            <i></i>
          </div>
          <div className="signup-links">
            <Link to="/login">Already have an account? Login</Link>
          </div>
          <input type="submit" value="Sign Up" />
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
}

export default Signup;
