// src/components/BookFilters.js
import React, { useState } from 'react';
import './styles/bookFilters.css'; // Create a corresponding CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSortAmountDown } from '@fortawesome/free-solid-svg-icons';

const BookFilters = ({ onFilterChange, onSortChange }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedSort, setSelectedSort] = useState('recent');

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    onFilterChange(filter);
  };

  const handleSortChange = (sort) => {
    setSelectedSort(sort);
    onSortChange(sort);
  };

  return (
    <div className="book-filters">
      <button
        className={`filter-button ${selectedFilter === 'all' ? 'active' : ''}`}
        onClick={() => handleFilterChange('all')}
      >
        <FontAwesomeIcon icon={faFilter} />
        All Books
      </button>
      <button
        className={`filter-button ${selectedFilter === 'fantasy' ? 'active' : ''}`}
        onClick={() => handleFilterChange('fantasy')}
      >
        <FontAwesomeIcon icon={faFilter} />
        Fantasy
      </button>
      <button
        className={`filter-button ${selectedFilter === 'scifi' ? 'active' : ''}`}
        onClick={() => handleFilterChange('scifi')}
      >
        <FontAwesomeIcon icon={faFilter} />
        Sci-Fi
      </button>
      {/* Add more filter buttons for different genres */}
      <div className="sort-dropdown">
        <FontAwesomeIcon icon={faSortAmountDown} />
        <select value={selectedSort} onChange={(e) => handleSortChange(e.target.value)}>
          <option value="recent">Sort by Recent</option>
          <option value="rating">Sort by Rating</option>
          {/* Add more sorting options */}
        </select>
      </div>
    </div>
  );
};

export default BookFilters;
