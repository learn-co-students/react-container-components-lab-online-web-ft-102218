import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'xJMUS2oFn2K1iDKwacnqKyVGjCIggGiO';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
    constructor() {
        super()

        this.state = {
            reviews: [],
            searchTerm: ''
        }

    }

    handleInput = (event) => this.setState({ 
        searchTerm: event.target.value
    })

    search = (e) => {
        e.preventDefault()
        fetch(URL+`&query=${this.state.searchTerm}`)
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
            <section className="searchable-movie-reviews">
                <form onSubmit={this.search}>
                    <input name="search" onChange={this.handleInput}/>
                    <input type="submit" value="Search Reviews" />
                </form>
                <MovieReviews reviews={this.state.reviews} />
            </section>
        )
    }
}
