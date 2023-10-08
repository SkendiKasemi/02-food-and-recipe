export const fetchCategoryPageData = async (category, setFoodItems) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    const data = await res.json();
    setFoodItems(data.meals);
  } catch (error) {
    console.log(error);
  }
};
