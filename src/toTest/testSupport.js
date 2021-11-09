export default function fetchApi({ isClicked, inputRadio, search }, path) {
  if (path === '/comidas') {
    path = 'meal';
  } else if (path === '/bebidas') {
    path = 'cocktail';
  }
  const fethEnd = async (end) => {
    try {
      const response = await fetch(`${end}${search}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  if (isClicked) {
    if (inputRadio === 'ingredient') {
      fethEnd(`https://www.the${path}db.com/api/json/v1/1/filter.php?i=`);
    } else if (inputRadio === 'name') {
      fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?s=`);
    } else {
      fethEnd(`https://www.the${path}db.com/api/json/v1/1/search.php?f=`);
    }
  }
}
