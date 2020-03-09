import React from 'react';
import styled from 'styled-components';

const Card = props => {
	const Card = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;
        background: #D3D3D3; 
        margin: 0 auto;
        margin-bottom: 10px;
		  border: 2px dashed dodgerblue;
		  border-radius: 2%;
    `;

	const Name = styled.h3`
		  font-size: 1.5rem;
        padding-top: 10px;
        font-weight: bold;
        color: cadetblue;
    `;

	const ListContainer = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 95%;
        color: #20B2AA;  
        font-weight: bold;
        margin: 0 auto;
    `;

	const List = styled.ul`
		display: flex;
		width: 80%;
		align-content: center;
		flex-direction: column;
		list-style-type: none;
		margin-top: 5px;
		margin-bottom: 5px;
	`;

	const ListItem = styled.li`
		display: flex;
		width: 90%;
      align-content: space-between;
      justify-content: center;
		margin-top: 5px;
		margin-bottom: 5px;
		font-weight: normal;
		font-size: 1.1rem;
	`;
	const PropSpan = styled.span`
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