module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

function createRestaurant(restaurantName) {
  return {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: [],
    }
  }
};

function addMenuItem(restaurantName, newItem) {
  if (!restaurantName.menus[newItem.type].includes(newItem)) {
    restaurantName.menus[newItem.type].push(newItem);
  }
}
// Had to get a good amount of help here but I think I get it.
// (I was very, very lost.)

function removeMenuItem(restaurantName, newItem, type) {

};
// I don't know, I'm so tired.
// I tried my best, but I couldn't figure out this last function.
// I deleted what I had because it was spaghetti code.
// Sorry. I'll try harder next time. :(


//   if (restaurantName.menus[newItem.type].includes(newItem) {
//     restaurantName.menus[newItem.type].pop(newItem);
//   }
// }

// ! = bang; changes statement to 'false'
// match newItem to type w/brackets
