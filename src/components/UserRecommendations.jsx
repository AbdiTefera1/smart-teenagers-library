// src/components/UserRecommendations.js
import React from "react";
import { FaStar, FaUser } from "react-icons/fa"; // For star icons
import "./styles/userRecommendation.css"; // Create a corresponding CSS file

const recommendations = [
  {
    userName: "TeenReader1",
    rating: 5, // 5-star rating
    text: "This book was amazing! I couldn't put it down. Highly recommended!",
  },
  {
    userName: "BookLover123",
    rating: 4, // 4-star rating
    text: "A great read for teenagers. I enjoyed it a lot.",
  },
  {
    userName: "ReadsALot",
    rating: 5, // 5-star rating
    text: "One of the best books I've read this year. Can't wait for the sequel!",
  },
  {
    userName: "ReaderX",
    rating: 3, // 3-star rating
    text: "It was an okay book, but not my favorite. Some parts were interesting.",
  },
  {
    userName: "Bookworm99",
    rating: 4, // 4-star rating
    text: "I really liked the characters in this book. They felt so real!",
  },
];

const UserRecommendations = () => {
  return (
    <div className="user-recommendations">
      <h2>Teenagers' Recommendations</h2>
      <div className="reviews">
        {recommendations.map((review, index) => (
          <div className="review" key={index}>
            <div className="user-info">
              <div className="user-avatar">
                <FaUser className="user-icon" />
              </div>
              <div className="user-name">{review.userName}</div>
            </div>
            <div className="review-content">
              <div className="review-rating">
                {Array.from({ length: review.rating }, (_, i) => (
                  <FaStar key={i} className="star filled" />
                ))}
                {Array.from({ length: 5 - review.rating }, (_, i) => (
                  <FaStar key={i} className="star" />
                ))}
              </div>

              <p className="review-text">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRecommendations;
