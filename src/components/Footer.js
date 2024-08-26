import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Footer.css'; // Ensure the path is correct

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Stock</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/signup">Signup</Link></li>
              <li><Link to="/product">Product</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Get in Touch</h4>
            <ul className='Get-in-touch'>
              <li>Address: Gwalior</li>
              <li>Phone: +91 9981506307</li>
              <li>Email: <a href="mailto:jating673@gmail.com">jating673@gmail.com</a></li>
              <li>Office Hours: Monday to Friday: 9:00 AM - 5:00 PM GMT </li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
