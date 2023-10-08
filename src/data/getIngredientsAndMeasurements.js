export function getIngredientsAndMeasurements(meal) {
  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient !== '' && measure !== '') {
      ingredients.push(ingredient);
      measures.push(measure);
    }
  }

  return { ingredients, measures };
}
