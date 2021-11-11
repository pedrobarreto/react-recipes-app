export default async function fetchApi(toSearch, path) {
  if (path.includes('comidas')) {
    path = 'meal';
  } else if (path.includes('bebidas')) {
    path = 'cocktail';
  }

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
  case 'random':
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/random.php`);
  default:
    return fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?s=`);
  }
}
