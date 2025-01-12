import { useState } from 'react';
import MealItemSub from './MealItemSub';
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
	width: 900px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	gap: 30px;
`;



function MealItem({ items = [] }){
	const [activeId, setActiveId] = useState(null);

	const openHandler = (id) => {
		setActiveId(id)
		console.log('Mealitem>>>',id)
	};

	return(
		<Container open={activeId === null}>
			{items.map((item)=>{
				return<MealItemSub key={item.id} item={item} openHandler={openHandler} isOpen={activeId === item.id} />
			})}
		</Container>
	)
};

export default MealItem;