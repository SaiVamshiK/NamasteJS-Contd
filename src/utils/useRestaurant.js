import { useEffect, useState } from "react";

// Creation of custom hook
const useRestaurant = (id) => {
  let [restaurant, setRestaurant] = useState({});
  let EACH_REST_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.413503886211508&lng=78.4943925216794&restaurantId=" +
    id;
  async function getRestaurantInfo() {
    const data = await fetch(EACH_REST_URL);
    let json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card.card.info);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  return restaurant;
};

export default useRestaurant;
