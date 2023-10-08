import { useSearch } from '../../../context/SearchContext';
import SearchList from './SearchList';
import './search.css';

export default function SearchBar() {
  const { value, setValue } = useSearch();
  return (
    <div className='search-container'>
      <input
        type='text'
        name='text'
        autoComplete='off'
        className='search-input'
        placeholder='Search'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value.length > 0 && <SearchList />}
    </div>
  );
}
