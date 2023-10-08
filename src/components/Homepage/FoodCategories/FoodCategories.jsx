import { useFoodCategories } from '../../../context/FoodCategoriesContext';
import FoodCategory from './FoodCategory';
import './FoodCategories.css';

export default function FoodCategories() {
  const { categories } = useFoodCategories();
  return (
    <>
      <h2 className='categories-text'>Categories :</h2>
      <ul className='horizontal-scroll'>
        {categories.length &&
          categories.map((category) => {
            const {
              idCategory,
              strCategory,
              strCategoryDescription,
              strCategoryThumb,
            } = category;
            return (
              <FoodCategory
                key={idCategory}
                strCategory={strCategory}
                strCategoryDescription={strCategoryDescription}
                strCategoryThumb={strCategoryThumb}
              />
            );
          })}
      </ul>
    </>
  );
}
