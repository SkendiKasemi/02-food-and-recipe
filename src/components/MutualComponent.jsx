import { Link } from 'react-router-dom';
import DeleteButton from '../components/Buttons/DeleteButton/DeleteButton';

export default function MutualComponent({
  strMeal,
  strMealThumb,
  showDeleteButton = false,
  idMeal,
}) {
  return (
    <>
      <Link className='foodCategory-container' to={`/item?label=${strMeal}`}>
        <img src={strMealThumb} alt={strMeal} className='foodCategory-image' />

        <h3 className='foodCategory-name'>{strMeal}</h3>
      </Link>
      <div className='showDeleteButton'>
        {showDeleteButton && <DeleteButton idMeal={idMeal} />}
      </div>
    </>
  );
}
