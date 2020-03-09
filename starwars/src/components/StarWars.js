import React from 'react';
import Card from './Card'
import './StarWars.css'

const StarWars = (props) => {

	return (
		<div className='starwars'>
			{props.characterList.map((ch, index) => (
				<Card key={index} name={ch.name} birthYear={ch.birth_year} hairColor={ch.hair_color} height={ch.height} eyeColor={ch.eye_color}  />
			))}

		</div>
	)
};

export default StarWars;