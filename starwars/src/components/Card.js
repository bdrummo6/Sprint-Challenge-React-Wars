import React from 'react';

const Card = (props) => {
	return (
		<div className='card'>
			<h3>{props.name}</h3>
			<ul>
				<li>Birth Year: {props.birth_year}</li>
				<li>Hair Color: {props.hair_color}</li>
				<li>Eye Color: {props.eye_color}</li>
				<li>Height: {props.height}</li>
			</ul>
		</div>
	);
};

export default Card;

