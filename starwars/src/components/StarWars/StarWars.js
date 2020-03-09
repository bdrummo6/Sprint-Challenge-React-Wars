import React from 'react';
import Card from '../Card/Card'
import './StarWars.css'
import styled from 'styled-components'; // imports styled-components for use to style main container of the page

const StarWars = props => {
	// Sets the styling for the card container so that the cards are in two columns instead of one long column
	const StarWars = styled.div`
        display: flex;
        flex-wrap: wrap;
    `;
	
	return (
		<StarWars>
			{/* Maps the array of characters attributes and builds a card for each one with the select attributes */}
			{props.characterList.map((ch, index) => (
				<Card key={index} name={ch.name} birth_year={ch.birth_year} hair_color={ch.hair_color} height={ch.height} eye_color={ch.eye_color}  />
			))}
		</StarWars>
	)
};

export default StarWars;