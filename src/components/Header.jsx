import React from 'react';
import './styles/header.css';
import icon from '../images/books.png';
import { FaHome, FaBook, FaInfoCircle } from 'react-icons/fa'; // Import Font Awesome icons

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={icon} alt="Library Logo" />
        <span className="library-name">Smart Library</span>
      </div>
      <nav className="header__nav">
        <ul>
          <li><a href="/" className="nav-link"><FaHome /> Home</a></li>
          <li><a href="/browse" className="nav-link"><FaBook /> Browse Books</a></li>
          <li><a href="/about" className="nav-link"><FaInfoCircle /> About Us</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;