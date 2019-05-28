import React from 'react'

const MovieReviews = (props) => (
    <ul className="review-list">
        {props.reviews.map((review, i) => {
            return (
                <li key={i} className="review">
                    <span>{review.display_title}</span> <br /> <span><img src={review.multimedia['src']} alt={`review ${i}`}/></span>
                </li>
            )
        })}
    </ul>
)

export default MovieReviews
