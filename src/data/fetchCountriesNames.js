export const fetchCountriesNames = async (setCountries) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const data = await res.json();
    // console.log(data.meals);
    setCountries(data.meals);
  } catch (error) {
    console.log(error);
  }
};
