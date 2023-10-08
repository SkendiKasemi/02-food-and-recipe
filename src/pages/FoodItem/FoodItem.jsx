import { useFoodItem } from '../../context/FoodItemContext';
import './FoodItem.css';
import YoutubeButton from '../../components/Buttons/YoutubeButton/YoutubeButton';
import AddButton from '../../components/Buttons/AddButton.jsx/AddButton';

export default function FoodItem() {
  const {
    strInstructions,
    strMeal,
    strMealThumb,
    strYoutube,
    strArea,
    strCategory,
    ingredients,
    measures,
    idMeal,
  } = useFoodItem();

  return (
    <div className='container'>
      <div className='info'>
        <div className='right-side'>
          <img src={strMealThumb} alt={strMeal} className={'image-item  animation'} />
          <div className='instructions'>
            <h4>Instructions</h4>
            {strInstructions}
          </div>
        </div>

        <div className='left-side'>
          <div className='recipe-cart'>
            <h2 className='cart-header'>{strMeal}</h2>
            <ul className='ingredient-list'>
              {ingredients.map((ingredient, index) => (
                <li className='ingredient-item' key={index}>
                  {measures[index]}
                  {'  '} {ingredient}
                </li>
              ))}
            </ul>
          </div>
          <div className='types'>
            <h3>Cuisine Type: {strArea}</h3>
            <h3>Meal Type: {strCategory}</h3>
          </div>
        </div>
      </div>
      <div className='buttons'>
        <AddButton idMeal={idMeal} />
        <YoutubeButton strYoutube={strYoutube} strMeal={strMeal} />
      </div>
    </div>
  );
}
