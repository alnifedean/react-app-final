import { useState, useReducer, useRef } from 'react';
import { useAuthContext } from '../../context/AuthContext';
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components';


const ContainerItem = styled.div`
	background-color: #ED1C2C;
	height: 350px;
	width: ${props => props.open ? '700px':'350px'};
	z-index: ${props => props.open ? '50':''};
	padding: 5px 10px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	border-radius: 10px;
	box-shadow: 0 0 10px 0 #000;


	@media (max-width: 720px){
	justify-content: space-around;
	}
`;

const H3 = styled.div`
	width: 100%;
	font-size: 30px;
	margin: 10px 0 0 0;
	// background-color: #eee;
	color: #eee;
	text-align: center;
	display: flex;
	justify-content: space-between;
`;

const ControlsItems = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;	
	@media (max-width: 720px){
	flex-direction: column;
	align-items: center;
	}
`;

const Input = styled.input`
	width: 20%;
	box-shadow: 0 0 10px 0 ${({$invalid})=> $invalid ? '#fff' : '#f00'}
	padding: 2px;
	margin: 2px;
	text-align: center;
`;

const Button = styled.button`
	width: 30%;
	border-radius: 5px;
	border: 0;
	box-shadow: 0 0 4px 0 #000;
	font-weight: bold;

	&:hover {
	background-color: #555;
	color: #fff;
	}

	@media (max-width: 720px){
	width: 60%
	}
`;

const Price = styled.div`
	color: #eee;
	font-weight: bolder;
`;

const P = styled.p`
	display: ${props => props.open ? '':'none'};
	cursor: pointer;
	border: 2px solid #eee;
	padding: 0 10px;
	border-radius: 5px;
	background-color: #eee;
	color: #000;

`;

const ImagenContainer = styled.div`
	width: 100%;
	height: 70%;
	background-color: rgb(82, 13, 88);
	margin: 0;
	display: flex;
	border-radius: 5px;

	@media (max-width: 720px){
	display: none
	}
`;

const Img = styled.img`
	width: 100%;
	max-width: 330px;
	border-radius: 5px
`;

const Description = styled.div`
	background-color: #eee;
	display: ${props => props.open ? 'flex':'none'};
  justify-content: center;
  align-items: center;
	text-align: center;
	margin: 15px;
	border-radius: 5px;
`;


const reducer = (state, action) =>{
	switch (action.type) {
		case 'UPDATE_NUMBER':
			return {...state, number: action.payload}
		
		default:
			return state;
	}
};

function MealItemSub( { item, openHandler, isOpen } ){

	const { setData, setItemsState } = useAuthContext();
	const [numberItems, dispatch] = useReducer(reducer,{
		number: 0
	});
	const [isValid, setIsValid] = useState(true)
	const containerRef = useRef(null);
	const [searchParams, setSearchParams] = useSearchParams();

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

	const openingContainer = () => {
		openHandler(item.id);
		if (containerRef.current) { containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' }); }
		setSearchParams({id: item.title})
	};

	const closingContainer = () => {
		openHandler(null);
		setSearchParams('')
	};

	const images = require.context('../../UI/Images/dishes', false, /\.jpg$/);
	const getImage = (id) => {
		try {
			return images(`./${id}.jpg`);
		} catch (error) {
			return 'src/UI/Images/default.jpg'; // Imagen predeterminada en caso de que no exista la imagen específica
		}
	};
	const image = getImage(item.id);


	return(
		<ContainerItem ref={containerRef}  open={isOpen} >

			<H3>
				<h3>{item.title.toUpperCase()}</h3>
				<P open={isOpen} onClick={closingContainer}>X</P>
			</H3>

			<ImagenContainer>
				<Img src={image} alt={item.title} />
				<Description open={isOpen} >{item.description}</Description>
			</ImagenContainer>

			<ControlsItems>
				<Button onClick={openingContainer}>Ver mas</Button>
				<Price>${item.price}</Price>
				<Input type="number" min={0} value={numberItems.number || 0} onChange={changeHandler} $invalid={isValid} />
				<Button onClick={increaseButton}>Agregar</Button>
			</ControlsItems>

		</ContainerItem>
	)
};

export default MealItemSub;