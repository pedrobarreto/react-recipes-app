export default async function fetchDetails(id, path) {
  if (path === 'comidas') {
    path = 'meal';
  } else if (path === 'bebidas') {
    path = 'cocktail';
  }
  const fetchEnd = async (end) => {
    try {
      const response = await fetch(`${end}${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.mensage;
    }
  };
  return fetchEnd(`https://www.the${path}db.com/api/json/v1/1/lookup.php?i=`);
  // https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772
  // switch (inputRadio) {
  // case 'name':
  //   return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?s=`);
  // case 'ingredient':
  //   return fethEnd(`https://www.the${path}db.com/api/json/v1/1/filter.php?i=`);
  // case 'first-letter':
  //   return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?f=`);
  // default:
  //   return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?s=`);
  // }
}
