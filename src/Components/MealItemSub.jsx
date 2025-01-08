import { useState, useReducer } from 'react';
import styled from 'styled-components';
import { useAuthContext } from '../context/AuthContext';

const ContainerItem = styled.div`
	background-color: #fff;
	height: 200px;
	width: 200px;
	padding: 5px 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 5px;

	@media (max-width: 720px){
	justify-content: space-around;
	}
`;

const ControlsItems = styled.div`
	display: flex;
	justify-content: space-between;

	@media (max-width: 720px){
	flex-direction: column;
	align-items: center;
	}
`;

const Input = styled.input`
	width: 60%;
	box-shadow: 0 0 10px 0 ${({$invalid})=> $invalid ? '#fff' : '#f00'}
`;

const Button = styled.button`
	width: 30%;
	border-radius: 5px;
	box-shadow: 0 0 2px 0 #000;
	font-weight: bold;

	&:hover {
	background-color: #555;
	color: #fff;
	}

	@media (max-width: 720px){
	width: 60%
	}
`;

const Description = styled.div`
	@media (max-width: 720px){
	display: none
	}
`;

const reducer = (state, action) =>{
	switch (action.type) {
		case 'UPDATE_NUMBER':
			return {...state, number: action.payload}
		
		default:
			return state;
	}
};

function MealItemSub( { item } ){

	const { setData, setItemsState } = useAuthContext();
	const [numberItems, dispatch] = useReducer(reducer,{
		number: 0
	});
	const [isValid, setIsValid] = useState(true)

	const increaseButton = () =>{

		if (numberItems.number === 0){
			setIsValid(false);
			return;
		};

		setData({ counter: numberItems.number, id: item.id });

		setItemsState((prevState) => ({ ...prevState, [item.title.toLowerCase()]: numberItems.number, }));
		
		setIsValid(true)
		
		dispatch({
			type: 'UPDATE_NUMBER',
			payload: 0
		})

	};

	const changeHandler = (event) =>{ 
		dispatch({
			type: 'UPDATE_NUMBER',
			payload: +event.target.value
		})
	};

	

	return(
		<ContainerItem>
			<h2>{item.title}</h2>
			<Description>{item.description}</Description>
			<div>${item.price}</div>
			<ControlsItems>
				<Input type="number" min={0} value={numberItems.number || 0} onChange={changeHandler} $invalid={isValid} />
				<Button onClick={increaseButton}>Elegir</Button>
			</ControlsItems>
		</ContainerItem>
	)
};

export default MealItemSub;