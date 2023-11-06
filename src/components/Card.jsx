// Card.js

import React from "react";
import { FaArrowRight } from 'react-icons/fa'; 
import "./styles/card.css";

const Card = ({ book, index }) => {
  return (
    <div className="featured-item" key={index}>
      <img src={book.cover} alt={book.title} />
      <div className="featured-info">
        <h3>{book.title}</h3>
        <p>{book.description}</p>
        <button className="learn-more-button">Read more <FaArrowRight/></button>
      </div>
    </div>
  );
};

export default Card;
