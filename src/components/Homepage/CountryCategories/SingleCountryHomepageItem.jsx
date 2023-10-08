import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SingleCountryHomepageItem({ strArea }) {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    const fetchByArea = async () => {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${strArea}`
      );
      const data = await res.json();
      setCountryData(data.meals[0]);
    };
    fetchByArea();
  }, []);

  const { strMealThumb } = countryData;

  return (
    <Link className='country-link' to={`/country?country=${strArea}`}>
      <div className='country-container'>
        <img src={strMealThumb} alt={strArea} className='country-specialFood' />
        <h3 className='country-name'>{strArea}</h3>
      </div>
    </Link>
  );
}
