import { useCallback } from "react";

export const useHttp = () => {

  const URL_BASE = 'https://react-meals-69a19-default-rtdb.firebaseio.com/'

  const fetchDishes = async () => {
    const url = `${URL_BASE}.json`
    const response = await fetch(url);
    const data = await response.json();
    return data.dishes ? data.dishes : {};
  };
  // agregar un try catch

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
    const dishesData = await fetchDishes();
    const listaDishes = listDishes(dishesData); 
    return listaDishes;
  },[]); 
  return getDishes;
};