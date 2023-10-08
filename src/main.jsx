import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { SearchProvider } from './context/SearchContext.jsx';
import { FoodItemProvider } from './context/FoodItemContext.jsx';

import { FoodCategoriesProvider } from './context/FoodCategoriesContext.jsx';
import { SingleFoodCategoryProvider } from './context/SingleFoodCategoryContext.jsx';
import { CountryCategoriesProvider } from './context/CountryCategoriesContext.jsx';
import './index.css';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CountryCategoriesProvider>
        <SearchProvider>
          <FoodItemProvider>
            <FoodCategoriesProvider>
              <SingleFoodCategoryProvider>
                <App />
              </SingleFoodCategoryProvider>
            </FoodCategoriesProvider>
          </FoodItemProvider>
        </SearchProvider>
      </CountryCategoriesProvider>
    </BrowserRouter>
  </React.StrictMode>
);
