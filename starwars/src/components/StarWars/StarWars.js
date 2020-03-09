import React from 'react';
import Card from '../Card/Card'
import './StarWars.css'


const StarWars = props => {

	return (
		<div className='starwars'>
			{props.characterList.map((ch, index) => (
				<Card key={index} name={ch.name} birth_year={ch.birth_year} hair_color={ch.hair_color} height={ch.height} eye_color={ch.eye_color}  />
			))}
		</div>
	)
};

export default StarWars;