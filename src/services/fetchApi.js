export default async function fetchApi({ inputRadio, search }, path) {
  if (path === '/comidas') {
    path = 'meal';
  } else if (path === '/bebidas') {
    path = 'cocktail';
  }

  const fethEnd = async (end) => {
    try {
      const response = await fetch(`${end}${search}`);
      const data = await response.json();
      return data;
    } catch (error) {
      return error.mensage;
    }
  };

  switch (inputRadio) {
  case 'name':
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?s=`);
  case 'ingredient':
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/filter.php?i=`);
  case 'first-letter':
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?f=`);
  default:
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?s=`);
  }
}
