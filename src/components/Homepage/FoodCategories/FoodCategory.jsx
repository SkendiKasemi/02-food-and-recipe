import { Link } from 'react-router-dom';

export default function FoodCategory({
  strCategory,
  strCategoryThumb,
}) {
  return (
    <Link
      className='horizontal-scroll-link'
      to={`/foodCategory?category=${strCategory}`}
    >
      <div className='horizontal-scroll-container'>
        <h3>{strCategory}</h3>
        <img src={strCategoryThumb} className='category-image' />
      </div>
    </Link>
  );
}
