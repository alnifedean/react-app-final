import styled from 'styled-components';
import MealItem from "./MealItem"
import { useHttp } from '../../Hooks/use-http';
import { useEffect, useState } from 'react';

const MealContainer = styled.div`
	padding: 10px;
	margin: 15px;
	width: 95vw;
	border-radius: 8px;
	display: flex;
	justify-content: center;
`;

function Meals(){

	const [platillos, setPlatillos] = useState([]);
	const getDishes = useHttp();

	useEffect(() => {
		const fetchAndSetDishes = async () => {
			const fetchedDishes = await getDishes();
			setPlatillos(fetchedDishes)
		}
		fetchAndSetDishes()
	},[getDishes])

	return(
		<>
			<MealContainer>
				<MealItem items={platillos}  />
			</MealContainer>
		</>
	)
};

export default Meals;