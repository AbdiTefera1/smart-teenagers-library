
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Social media icons
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/about-us">About Us</a>
        <a href="/contact">Contact</a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms of Service</a>
      </div>
      <div className="social-media">
        <h3>Follow Us</h3>
        <div className="social-icons">
          <a href="https://www.facebook.com/" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://twitter.com/home" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/" className="social-icon">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/" className="social-icon">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
