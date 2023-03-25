import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  let [restaurant, setRestaurant] = useState({});
  let [menu, setMenu] = useState([]);
  let EACH_REST_URL = 'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.413503886211508&lng=78.4943925216794&restaurantId='+id;
  

  async function getRestaurantInfo() {
    const data = await fetch(
      EACH_REST_URL
    );
    let json = await data.json();
    setRestaurant(json?.data?.cards[0]?.card.card.info);
    json =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        .card;
    console.log(json);
    setMenu(json);
  }

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  if (Object.keys(restaurant).length === 0) {
    return <ShimmerUI/>
  } else {
    return (
      <div className="menu">
        <div>
          <h1>Restraunt id: {id}</h1>
          <h2>{restaurant?.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <h3>{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div>
          <h1>Menu</h1>
          <ul>
            {menu?.itemCards?.map((item, x) => (
              <li key={x}>{item.card.info.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
