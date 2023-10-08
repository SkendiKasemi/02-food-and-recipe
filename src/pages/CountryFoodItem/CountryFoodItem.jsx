import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import MutualComponent from '../../components/MutualComponent';

export default function CountryFoodItem() {
  const [countrySpecialFoods, setCountrySpecialFoods] = useState([]);

  const [searchParams] = useSearchParams();
  const country = searchParams.get('country');

  useEffect(() => {
    const fetchCountrySpecialFoods = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`
        );
        const data = await res.json();
        setCountrySpecialFoods(data.meals);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountrySpecialFoods();
  }, []);
  return (
    <div className='foodCategoryPage-container'>
      {countrySpecialFoods.map((countrySpecialFood) => {
        const { idMeal, strMeal, strMealThumb } = countrySpecialFood;
        return (
          <MutualComponent
            key={idMeal}
            idMeal={idMeal}
            strMeal={strMeal}
            strMealThumb={strMealThumb}
          />
        );
      })}
    </div>
  );
}
