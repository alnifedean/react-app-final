import MealItemSub from './MealItemSub';
import styled from 'styled-components';

const Container = styled.div`
	height: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	flex-wrap: wrap;
	gap: 15px;
`;

function MealItem({ items = [] }){
	console.log('Items en MealItem:',items);
	return(
		<Container>
			{items.map((item)=>{
				return<MealItemSub key={item.id} item={item} />
			})}
		</Container>
	)
};

export default MealItem;