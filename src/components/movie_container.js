import React, { Component } from 'react';
import Movie from './movie';
import axios from 'axios'; 

class MovieContainer extends Component {
    constructor (props) {
        super(props);

        this.state = {
            movies: [],
            error: ''
        }
    }


    componentDidMount(){
        this.getListData();
    }
    
    // async getListData() {
    //     try {
    //         const itunes = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
    //         const resp = await axios.get(itunes) 
    //         this.setState({
    //             movies: resp.data.feed.entry
    //         })
    //     } catch (err) {
    //         this.setState ({
    //             error: 'There seems to be some technical difficulties. We`ll have the site generated shortly. Thank you for your patience!'
    //         })
    //     }  
    // }

    getListData = () => {
        const itunes = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(itunes).then( (resp)=>{
            this.setState({
                movies: resp.data.feed.entry
            })
        }).catch( (err) => {
            this.setState({
                error: 'There seems to be some technical difficulties. We`ll have the site generated shortly. Thank you for your patience!'
            })
        })
    }


    render(){
        const movieList = this.state.movies.map( (movieInfo, index)=> {
            return (
                <Movie info={movieInfo} key={index}/>
            )
        })
        const {error} = this.state
        return(
            <div>
                {
                    error
                    ? <h5> {error} </h5>
                    : <div> {movieList} </div> 
                }
            </div>
        )
    }
}

export default MovieContainer; 