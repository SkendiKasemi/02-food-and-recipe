import MutualComponent from '../../components/MutualComponent';
import { useFoodItem } from '../../context/FoodItemContext';


export default function Favorites() {
  const { isFavorite } = useFoodItem();
  return (
    <>
      <h2 className='categories-text'>Favorites :</h2>
      <div className='foodCategoryPage-container'>
        {isFavorite?.map((item) => {
          const { idMeal, strMeal, strMealThumb, showDeleteButton } = item;
          return (
            <MutualComponent
              idMeal={idMeal}
              key={idMeal}
              strMeal={strMeal}
              strMealThumb={strMealThumb}
              showDeleteButton={showDeleteButton}
            />
          );
        })}
      </div>
    </>
  );
}
