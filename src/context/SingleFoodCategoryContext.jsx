import { createContext, useEffect, useState, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchCategoryPageData } from '../data/fetchFoodCategoryPage';

const SingleFoodCategoryContext = createContext();

export const SingleFoodCategoryProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetchCategoryPageData(category, setFoodItems);
  }, [category]);

  return (
    <SingleFoodCategoryContext.Provider value={{ foodItems }}>
      {children}
    </SingleFoodCategoryContext.Provider>
  );
};

export const useSingleFoodCategory = () => {
  const context = useContext(SingleFoodCategoryContext);
  if (context === undefined)
    throw Error(
      'SingleFoodCategoryContext was used out of SingleFoodCategoryContext.Provider.'
    );
  return context;
};
