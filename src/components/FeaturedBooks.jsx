// FeaturedBooks.js

import React from 'react';
import './styles/featuredBooks.css';

import book from '../images/books.png';
import Card from './Card';
const featuredBooksData = [
    {
      title: 'Bestsellers for Teens',
      description: 'Discover the hottest books for young readers. Find thrilling adventures, mysteries, and more.',
      cover: book,
    //   cover: 'bestsellers.jpg',
    },
    {
      title: 'Fantasy Adventures',
      description: 'Embark on magical journeys in fantastical worlds with these captivating fantasy books.',
      cover: book,
    //   cover: 'fantasy.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
  ];
  
  const FeaturedBooks = () => {
    return (
      <div className="featured-books">
        <h2>Featured Books & Categories</h2>
        <div className="featured-grid">
          {featuredBooksData.map((book, index) => (
            <Card book={book} index={index}/>
          ))}
        </div>
      </div>
    );
  };
  
  export default FeaturedBooks;