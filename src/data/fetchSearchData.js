export const fetchSearchData = async (value, setData) => {
  if (!value.length) return;
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`
    );
    const result = await response.json();
    setData(result.meals);
  } catch (error) {
    console.error(error);
  }
};
