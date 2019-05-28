import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
require('es6-promise').polyfill();
require('isomorphic-fetch');

const NYT_API_KEY = 'xJMUS2oFn2K1iDKwacnqKyVGjCIggGiO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: []
        }

    }

    componentDidMount() {
        fetch(URL)
        .then(function(response) {
            if (response.status >= 400) {
                throw new Error("Bad response from server");
            }
            return response.json();
        })
        .then(data => this.setState( {reviews: data.results } ))
    }

    render() {
        return(
            <section className="latest-movie-reviews"><h3>Latest Reviews</h3><MovieReviews reviews={this.state.reviews} /></section>
        )
    }
}
