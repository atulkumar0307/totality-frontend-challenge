import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <h1>RentEase</h1>
          <p>Your trusted partner in finding the perfect property.</p>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/properties">Properties</a></li>
            <li> <Link to="/about"> About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@propertyrental.com</p>
          <p>Phone: +1 234 567 890</p>
          <div className="footer-socials">
            <a href="https://facebook.com" className="social-icon">FB</a>
            <a href="https://twitter.com" className="social-icon">TW</a>
            <a href="https://instagram.com" className="social-icon">IG</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RentEase. All rights reserved | Atul Kumar</p>
      </div>
    </footer>
  );
};

export default Footer;
