import { useSingleFoodCategory } from '../../context/SingleFoodCategoryContext';
import './FoodCategoryPage.css';
import MutualComponent from '../../components/MutualComponent';

export default function FoodCategoryPage() {
  const { foodItems } = useSingleFoodCategory();

  return (
    <div className='foodCategoryPage-container'>
      {foodItems?.map((foodItem) => {
        const { idMeal, strMeal, strMealThumb } = foodItem;
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
