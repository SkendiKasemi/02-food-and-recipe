import { Link } from 'react-router-dom';
import { useSearch } from '../../../context/SearchContext';
export default function SearchItem({ image, name }) {
  const { setValue } = useSearch();
  return (
    <Link
      className='search-result-item'
      to={`/item?label=${name}`}
      onClick={() => {
        setValue('');
      }}
    >
      <img src={image} alt='food image' className='image' />
      <div className='name'>{name}</div>
    </Link>
  );
}
