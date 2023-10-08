import { createContext, useContext, useEffect, useState } from 'react';
import { fetchFoodItemData } from '../data/fetchFoodItemData';
import { useSearchParams } from 'react-router-dom';
import { getIngredientsAndMeasurements } from '../data/getIngredientsAndMeasurements';

import { useLocalStorageState } from '../data/useLocalStorageState';

const FoodItemContext = createContext();

export const FoodItemProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const label = searchParams.get('label');
  const [data, setData] = useState([]);
  const [isFavorite, setIsFavorite] = useLocalStorageState([], 'favorite');

  useEffect(
    function () {
      localStorage.setItem('favorite', JSON.stringify(isFavorite));
    },

    [isFavorite]
  );

  useEffect(() => {
    if (label) {
      fetchFoodItemData(label, setData);
    }
  }, [label]);

  const {
    strInstructions,
    strMeal,
    strMealThumb,
    strYoutube,
    idMeal,
    strArea,
    strCategory,
  } = data;

  const { ingredients, measures } = getIngredientsAndMeasurements(data);

  const handleAddFavorites = (item) => {
    const isDuplicate = isFavorite.some(
      (favorite) => favorite.idMeal === item.idMeal
    );

    if (!isDuplicate) {
      setIsFavorite((isFavorite) => [...isFavorite, item]);
    }
  };

  const handleAddButton = () => {
    const addedItem = {
      strMeal,
      strMealThumb,
      idMeal,
      showDeleteButton: true,
    };

    handleAddFavorites(addedItem);
  };

  const handleDelete = (id) => {
    setIsFavorite((isFavorite) => {
      isFavorite.filter((item) => item.idMeal !== id);
    });
  };

  return (
    <FoodItemContext.Provider
      value={{
        strInstructions,
        strMeal,
        strMealThumb,
        strYoutube,
        idMeal,
        strArea,
        strCategory,
        ingredients,
        measures,
        handleAddButton,
        handleDelete,
        isFavorite,
      }}
    >
      {children}
    </FoodItemContext.Provider>
  );
};

export const useFoodItem = () => {
  const context = useContext(FoodItemContext);
  if (context === undefined)
    throw new Error('Food Item Context was used out of Food Item Provider!');
  return context;
};
