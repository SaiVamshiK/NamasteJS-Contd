import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  let restaurant = useRestaurant(id);
  let menu = useMenu(id);

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
