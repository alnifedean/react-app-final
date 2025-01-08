import styles from './Meals.module.css'
import MealItem from "./MealItem"
import { useHttp } from '../Hooks/use-http';
import { useEffect, useState } from 'react';


function Meals(){

	const [platillos, setPlatillos] = useState([]);

	const getDishes = useHttp();

	useEffect(() => {
		const fetchAndSetDishes = async () => {
			const fetchedDishes = await getDishes();
			console.log('Platillos obtenidos:',fetchedDishes);
			setPlatillos(fetchedDishes)
		}
		fetchAndSetDishes()
	},[getDishes])

	return(
			<div className={styles['meals-Container']}>
				{/* {console.log(123)} */}
					<MealItem items={platillos} />
			</div>
	)
};

export default Meals;