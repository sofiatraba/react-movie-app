import React from 'react';

//Add Netflix-style like headings

const MovieListHeading = (props) => {
	return (
		<div className='col'>
			<h1>{props.heading}</h1>
		</div>
	);
};

export default MovieListHeading;
