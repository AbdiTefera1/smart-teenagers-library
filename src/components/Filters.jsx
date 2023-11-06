// Filters.js

import React from 'react';
import './styles/filters.css';
import { FaFilter, FaSort, FaSearch } from 'react-icons/fa'; // Import Font Awesome icons

const Filters = () => {
  return (
    <div className="filters-container">
      <div className="filter-button">
        <FaFilter /> Filter
      </div>
      <div className="filter-button">
        <FaSort /> Sort
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for books, authors, genres..."
          className="search-input"
        />
        <button className="search-button">
          <FaSearch />
        </button>
      </div>
    </div>
  );
}

export default Filters;
