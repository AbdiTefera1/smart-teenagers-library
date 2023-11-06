import React from 'react'
import book from '../images/books.png';
import Card from '../components/Card';
import './styles/browse.css';

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
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    {
      title: 'Science Fiction',
      description: 'Explore the future and beyond with these mind-bending science fiction tales.',
      cover: book,
    //   cover: 'scifi.jpg',
    },
    // Add more featured categories or books
  ];
const BrowseBooks = () => {
  return (
    <div className="featured-books">
        <h2>Featured Books & Categories</h2>
        <div className="featured-grid">
          {featuredBooksData.map((book, index) => (
            // <div className="featured-item" key={index}>
            //   <img src={book.cover} alt={book.title} />
            //   <div className="featured-info">
            //     <h3>{book.title}</h3>
            //     <p>{book.description}</p>
            //     <button className="learn-more-button">Learn More</button>
            //   </div>
            // </div>
            <Card book={book} index={index}/>
          ))}
        </div>
      </div>
  )
}

export default BrowseBooks