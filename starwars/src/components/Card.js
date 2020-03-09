import React from 'react';

const Card = (props) => {
	return (
		<div className='card'>
			<h3>{props.name}</h3>
			<ul>
				<li>Birth Year: {props.birthYear}</li>
				<li>Hair Color: {props.hairColor}</li>
				<li>Eye Color: {props.eyeColor}</li>
				<li>Height: {props.height}</li>
			</ul>
		</div>
	);
};

export default Card;

