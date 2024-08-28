import React from 'react';
import './Footer.css'; // Assuming you have a separate CSS file
import logo from './../../images/Jlogo-footer.webp'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content container">
        <div className="footer-section">
          <h1>
            <img
              className="footer-logo"
              src={logo}
              alt="Jusoor Logo"
            />
          </h1>
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">Address</h5>
          <p className="footer-text">
            <i className="fa fa-map-marker-alt"></i>
            <a
              href="https://www.google.com/maps/place/10+El-Batal+Ahmed+Abd+El-Aziz+Street,+Mohandessin,+Giza"
              target="_blank"
              rel="noopener noreferrer"
            >
              10 El-Batal Ahmed Abd El-Aziz Street, Mohandessin, Giza
            </a>
          </p>
          <p className="footer-text">
            <i className="fa fa-phone-alt"></i>19004
          </p>
          <p className="footer-text">
            <i className="fa fa-envelope"></i>info@jusoor.com.eg
          </p>
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">Quick Links</h5>
          <Link className="footer-link" to="/about">About Us</Link>
          <Link className="footer-link" to="/contact">Contact Us</Link>
          <Link className="footer-link" to="/solutions">Our Solutions</Link>
          <Link className="footer-link" to="/Terms-and-Conditions">Terms &amp; Condition</Link>
          <Link className="footer-link" to="/Privacy-policy">Privacy Policy</Link>
        </div>
        <div className="footer-section">
          <h5 className="footer-heading">Social Media</h5>
          <p className="footer-text">Always in touch</p>
          <div className="social-media-icons">
            <a className="social-icon" href=""><i className="fab fa-twitter"></i></a>
            <a className="social-icon" href=""><i className="fab fa-facebook-f"></i></a>
            <a className="social-icon" href=""><i className="fab fa-youtube"></i></a>
            <a className="social-icon" href=""><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        COPYRIGHT © 2024 JUSOOR FOR INSURANCE BROKERAGE - ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default Footer;
