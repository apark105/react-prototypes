import React from 'react';
import MovieContainer from './movieContainer';
// import Movie from './movie';

function App() { 
    return (
        <div className="container">
            <h1 className="text-center">Top 10 Movies</h1>
            <MovieContainer/>
        </div>
    )
}

export default App; 