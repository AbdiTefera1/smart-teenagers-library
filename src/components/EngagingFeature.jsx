// src/components/EngagingFeature.js
import React from 'react';
import { FaStar, FaPlayCircle } from 'react-icons/fa'; // Icons
import './styles/engagingFeature.css'; // Create a corresponding CSS file

const EngagingFeature = () => {
  return (
    <div className="engaging-feature">
      <h2 className="feature-title">Discover New Worlds</h2>
      <div className="feature-content">
        <p className="feature-description">
          Dive into exciting adventures and explore new horizons. Reading has never been more fun!
        </p>
        <div className="action-button">
          <a href="/books" className="explore-link">
            Explore Now <FaPlayCircle className="play-icon" />
          </a>
        </div>
      </div>
      <div className="star-ratings">
        {Array.from({ length: 5 }, (_, i) => (
          <FaStar key={i} className="star" />
        ))}
      </div>
    </div>
  );
};

export default EngagingFeature;
