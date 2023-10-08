import { useFoodItem } from '../../../context/FoodItemContext';
import './AddButton.css';
export default function AddButton({ idMeal }) {
  const { handleAddButton, isFavorite } = useFoodItem();

  const isAdded = isFavorite?.map((item) => item.idMeal).includes(idMeal);
  return (
    <button
      className='button-add'
      type='button'
      onClick={() => {
        handleAddButton();
      }}
      disabled={isAdded}
    >
      <span className='button__text'>
        {isAdded === true ? 'Item Added' : 'Add Item'}
      </span>
      {!isAdded && (
        <span className='button__icon'>
          <svg
            className='svg'
            fill='none'
            height='24'
            stroke='currentColor'
            viewBox='0 0 24 24'
            width='24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <line x1='12' x2='12' y1='5' y2='19'></line>
            <line x1='5' x2='19' y1='12' y2='12'></line>
          </svg>
        </span>
      )}
    </button>
  );
}
