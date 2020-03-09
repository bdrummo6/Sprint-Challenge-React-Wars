import React from 'react';
import styled from 'styled-components'; // imports styled-components for use to style each element

const Card = props => {
	// Sets the styling for each characters information card
	const Card = styled.div` 
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        width: 27%;
        background: #D3D3D3; 
        margin: 0 auto 17px;
		  border: 2px dashed cadetblue;
		  border-radius: 2%;
    `;
	
	// Sets the styling for each characters name
	const Name = styled.h3`
		  font-size: 1.5rem;
        padding-top: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: bold;
        color: cadetblue;
    `;

	// Sets the styling for div containing list of character attributes
	const ListContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
        color: #20B2AA;  
        font-weight: bold;
        margin: 0 auto;
    `;

	// Sets the styling for the list of character attributes
	const List = styled.ul`
		display: flex;
		width: 95%;
		align-content: center;
		flex-direction: column;
		list-style-type: none;
		margin-top: 5px;
		margin-bottom: 10px;
	`;

	// Sets the styling for each list item containing each character attribute
	const ListItem = styled.li`
		display: flex;
		width: 80%;
      align-content: space-between;
      justify-content: flex-start;
		margin: 5px 5% 5px 10%;
		font-weight: normal;
		font-size: 1.1rem;
	`;
	
	// Sets the styling for the spans holding each attributes value
	const PropSpan = styled.span`
		margin-left: 8px;
		font-weight: bold;
	`;

	return (
		<Card>
			<Name>{props.name}</Name>
			<ListContainer>
				<List>
					<ListItem>DOB: <PropSpan>{props.birth_year}</PropSpan></ListItem>
					<ListItem>Hair Color: <PropSpan>{props.hair_color}</PropSpan></ListItem>
					<ListItem>Eye Color: <PropSpan>{props.eye_color}</PropSpan></ListItem>
					<ListItem>Height: <PropSpan>{props.height}</PropSpan></ListItem>
				</List>
			</ListContainer>
		</Card>
	)
};

export default Card;