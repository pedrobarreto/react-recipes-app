const fethEnd = async (end, search = '') => {
  try {
    console.log(`${end}${search}`);
    const response = await fetch(`${end}${search}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return error.mensage;
  }
};

export default async function fetchApi(toSearch, path) {
  if (path.includes('comidas')) {
    path = 'meal';
  } else if (path.includes('bebidas')) {
    path = 'cocktail';
  }

  switch (toSearch.type) {
  case 'radio':
    switch (toSearch.radio.radioType) {
    case 'name':
      return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?s=`, toSearch.radio.search);
    case 'ingredient':
      return fethEnd(`https://www.the${path}db.com/api/json/v1/1/filter.php?i=`, toSearch.radio.search);
    case 'first-letter':
      return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?f=`, toSearch.radio.search);
    default: return 'error';
    }
  case 'category':
    switch (toSearch.category.categoryType) {
    case 'filter':
      return fethEnd(`https://www.the${path}db.com/api/json/v1/1/filter.php?c=`, toSearch.category.search);
    default:
      return fethEnd(`https://www.the${path}db.com/api/json/v1/1/list.php?c=list`);
    }
  case 'ingredients':
    switch (toSearch.ingredients.ingredientsType) {
    case 'filter':
      return fethEnd(`https://www.the${path}db.com/api/json/v1/1/filter.php?i=`, toSearch.ingredients.search);
    case 'get':
      return fethEnd(`https://www.the${path}db.com/api/json/v1/1/list.php?i=list`);
    default:
      return 'error';
    }
  case 'random':
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/random.php`);
  case 'details':
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/lookup.php?i=`, toSearch.details.search);
  default:
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?s=`);
  }
}
