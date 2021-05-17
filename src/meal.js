function nameMenuItem(menuItemName) {
  var nameMenuItem = menuItemName;
  return "Delicious " + nameMenuItem;
}



function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type,
  }
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (!ingredients.includes(ingredient)) {
    ingredients.push(ingredient)
  };
  return ingredients;
}

function formatPrice(initialPrice) {
  return "$" + initialPrice;
};

function decreasePrice(price) {
  var decreasedPrice = price * .9;
  return decreasedPrice;
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType,
  };
  return recipe;
};



//var menuItem = createMenuItem(menuItemName, 10.99, "breakfast");


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe,
}
