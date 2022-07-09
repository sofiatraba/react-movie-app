import React from 'react';

// This component allow us to return a list of poster movies using the API
const MovieList = (props) => {
	const FavouriteComponent = props.favouriteComponent;

	return (
		<>
			{props.movies.map((movie, index) => (
				<div className='image-container d-flex justify-content-start'>
					//We want to display the poster of each movie
					<img src={movie.Poster} alt='movie'></img>
					<div
						onClick={() => props.handleFavouritesClick(movie)}
						className='overlay d-flex align-items-center justify-content-center'
					>
						<FavouriteComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;
