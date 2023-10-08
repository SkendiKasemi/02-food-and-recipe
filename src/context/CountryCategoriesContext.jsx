import { createContext, useContext, useEffect, useState } from 'react';
import { fetchCountriesNames } from '../data/fetchCountriesNames';

const CountryCategoriesContext = createContext();

export const CountryCategoriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountriesNames(setCountries);
  }, []);

  return (
    <CountryCategoriesContext.Provider
      value={{
        countries,
      }}
    >
      {children}
    </CountryCategoriesContext.Provider>
  );
};

export const useCountryCategories = () => {
  const context = useContext(CountryCategoriesContext);
  if (context === undefined)
    throw Error(
      'CountryCategoriesProvider was used out of CountryCategoriesContext!!!'
    );
  return context;
};
