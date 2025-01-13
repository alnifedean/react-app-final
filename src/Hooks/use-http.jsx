import { useCallback } from "react";

export const useHttp = () => {

  const URL_BASE = 'https://react-meals-69a19-default-rtdb.firebaseio.com/'

  const fetchDishes = async () => {
    const url = `${URL_BASE}.json`

    try {
      const response = await fetch(url);
      const data = await response.json();
      return data.dishes ? data.dishes : {};
    } catch (error) {
      console.error('Error fetching las cosas');
      return {};
    }
  };

  const listDishes = (dishes) => {
    if (!dishes) {
      return [];
    }

    const keys = Object.keys(dishes); 
    const lista = keys.map(key => {
      return {
        id: key,
        title: dishes[key].name,
        description: dishes[key].description,
        price: dishes[key].price
      };
    });
    return lista;
  };


  const getDishes = useCallback(async () => {
    try {
      const dishesData = await fetchDishes();
      const listaDishes = listDishes(dishesData); 
      return listaDishes;
    } catch (error) {
      console.error('Error sacando los platillos', error);
      return[];
    }
  },[]); 
  return getDishes;
};