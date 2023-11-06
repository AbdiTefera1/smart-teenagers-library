import React from 'react';
import './styles/hero.css';
import { FaBook, FaPlayCircle } from 'react-icons/fa';
// import icon from '../images/books_bg.png';

const HeroSection = () => {
    return (
      <section className="hero">
        <div className="hero__content">
          <h1 className="hero__title">📚 Discover the World of Books 📚</h1>
          <p className="hero__description">Explore amazing stories and embark on exciting journeys.</p>
          <a href="/browse" className="hero__cta">Start Reading</a>
        </div>
        <div className="hero__illustration">
          <FaBook className="book-icon" />
          <FaPlayCircle className="play-icon" />
        </div>
      </section>
    );
  }
  
  export default HeroSection;