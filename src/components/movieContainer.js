import React, { Component } from 'react';
import axios from 'axios'; 
import Movie from './moviep';


class MovieContainer extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            movie: [],
        }
    }
    componentDidMount(){
        const itunesApi = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(itunesApi).then( (resp)=> {
            this.setState({
                movie: resp.data.feed.entry
            })
        })
    }
    render() {
        const { movie } = this.state;
        const movieList = movie.map( (movieInfo, index) => {
            console.log(movieInfo)
            return (
                <Movie info={movieInfo} key={index}/> 
            )
        })
        console.log(this.state.movie)
        return (
            <div className="container">
                <div className="row">
                    {movieList}
                
                </div>
            </div>
        )
    }
}

export default MovieContainer; 