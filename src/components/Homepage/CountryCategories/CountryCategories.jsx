import { useCountryCategories } from '../../../context/CountryCategoriesContext';
import SingleCountryHomepageItem from './SingleCountryHomepageItem';
import './CountryCategories.css';

export default function CountryCategories() {
  const { countries } = useCountryCategories();
  return (
    <>
      <h2 className='categories-text'>States:</h2>
      <ul className='countryCategories-container'>
        {countries.map((country, index) => {
          const { strArea } = country;

          return <SingleCountryHomepageItem key={index} strArea={strArea} />;
        })}
      </ul>
    </>
  );
}
