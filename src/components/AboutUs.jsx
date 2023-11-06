// src/components/AboutUs.js
import React from 'react';
import { FaUsers, FaHeart, FaBook } from 'react-icons/fa'; // Icons
import './styles/about.css'; // Create a corresponding CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <h2 className="about-title">About TeenReads</h2>
      <div className="about-content">
        <p className="about-description">
          We are a community of young readers who share a passion for books and stories. Our mission is to make reading fun and accessible for teenagers everywhere.
        </p>
      </div>
      <div className="about-icons">
        <div className="icon">
          <FaUsers className="icon-logo" />
          <p className="icon-description">Community</p>
        </div>
        <div className="icon">
          <FaHeart className="icon-logo" />
          <p className="icon-description">Passion</p>
        </div>
        <div className="icon">
          <FaBook className="icon-logo" />
          <p className="icon-description">Books</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
