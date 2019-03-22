import React from 'react';

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">
    {reviews.map((review, index) => <div key={index} className="review">{review.display_title}</div>)}
  </div>
}

export default MovieReviews