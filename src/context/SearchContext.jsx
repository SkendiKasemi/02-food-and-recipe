import { createContext, useContext, useEffect, useState } from 'react';
import { fetchSearchData } from '../data/fetchSearchData';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    fetchSearchData(value, setData);
  }, [value]);

  return (
    <SearchContext.Provider
      value={{
        data,
        value,
        setValue,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined)
    throw new Error('Search Context Used Out Of Search Provider!!!');

  return context;
};
