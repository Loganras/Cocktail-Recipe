updateUI = (data) => {
  const drinkData = data.drinks[0];
  console.log(drinkData);
  randomDrinkName.innerHTML = drinkData.strDrink;
  randomDrinkImage.src = drinkData.strDrinkThumb;
  randomDrinkRecipe.innerHTML = drinkData.strInstructions;

  let randomArray = [];
  for (let i = 1; i <= 15; i++) {
    if (drinkData[`strIngredient${i}`] === null) {
      break;
    }

    if (
      drinkData[`strMeasure${i}`] === null &&
      drinkData[`strIngredient${i}`] !== null
    ) {
      randomArray.push(drinkData[`strIngredient${i}`]);
    }

    if (
      drinkData[`strMeasure${i}`] !== null &&
      drinkData[`strIngredient${i}`] !== null
    ) {
      randomArray.push(
        drinkData[`strMeasure${i}`] + ' ' + drinkData[`strIngredient${i}`]
      );
    }

    console.log(randomArray);

    let ingredientList = '<div>';
    randomArray.forEach((element) => {
      ingredientList += '<div>' + element;
    });
    randomDrinkIngredient.innerHTML = ingredientList;
  }
};

const randomRecipe = async () => {
  fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then((response) => {
      if (!response.ok) {
        throw Error(
          `Something went wrong, your error code is: ${response.status}`
        );
      }
      return response.json();
    })
    .then((data) => {
      updateUI(data);
    })
    .catch((error) => {
      return error;
    });
};

const getMartini = async () => {
  const martiniPromise = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=martini'
  );

  if (martiniPromise.ok) {
    const getMartini = await martiniPromise.json();
    updateUI(getMartini);
  }
};

const getWhiskeySour = async () => {
  const whiskeySourPromise = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=whiskey_sour'
  );

  if (whiskeySourPromise.ok) {
    const getWhiskeySour = await whiskeySourPromise.json();
    updateUI(getWhiskeySour);
  }
};

const getCosmopolitan = async () => {
  const cosmopolitanPromise = await fetch(
    'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cosmopolitan'
  );

  if (cosmopolitanPromise.ok) {
    const getCosmopolitan = await cosmopolitanPromise.json();
    updateUI(getCosmopolitan);
  }
};
