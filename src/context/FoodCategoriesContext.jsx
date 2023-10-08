import { createContext, useContext, useEffect, useState } from 'react';
import { fetchCategories } from '../data/fetchCategories';

const FoodCategoriesContext = createContext();

export const FoodCategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories(setCategories);
  }, []);

  return (
    <FoodCategoriesContext.Provider value={{ categories }}>
      {children}
    </FoodCategoriesContext.Provider>
  );
};

export const useFoodCategories = () => {
  const context = useContext(FoodCategoriesContext);
  if (context === undefined)
    throw new Error(
      'FoodCategoriesContext was used out of FoodCategoriesProvider.'
    );
  return context;
};
