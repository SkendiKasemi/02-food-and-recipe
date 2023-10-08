export const fetchFoodItemData = async (value, setData) => {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    const result = await response.json();

    setData(result?.meals[0]);
  } catch (error) {
    console.error(error);
  }
};
