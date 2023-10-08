import { useSearch } from '../../../context/SearchContext';
import SearchItem from './SearchItem';

export default function SearchList() {
  const { data } = useSearch();
  return (
    <ul className='search-results'>
      {data?.map((meal) => {
        const { idMeal, strMealThumb, strMeal, strArea } = meal;

        return (
          <SearchItem
            key={idMeal}
            name={strMeal}
            image={strMealThumb}
            cuisineType={strArea}
          />
        );
      })}
    </ul>
  );
}
