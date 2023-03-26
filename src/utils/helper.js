// This is used to keep the helper functions

export function filterData(inputVal, listOfRestaurants) {
  let tempFilter = listOfRestaurants.filter((restaurant) => {
    if (restaurant.data.name.includes(inputVal)) {
      return true;
    }
    return false;
  });
  return tempFilter;
}
