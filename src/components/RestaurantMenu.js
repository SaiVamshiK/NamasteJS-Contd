import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../utils/useRestaurant";
import useMenu from "../utils/useMenu";
import { addItem } from "../utils/CartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;
  let restaurant = useRestaurant(id);
  let menu = useMenu(id);

  const dispatch = useDispatch();

  const handleAddItem = (item) =>{
    dispatch(addItem(item));
  }

  if (Object.keys(restaurant).length === 0) {
    return <ShimmerUI/>
  } else {
    return (
      <div>
        <div className="w-[200px] p-2 m-2 shadow-lg">
          <h2 className="font-bold text-xl">{restaurant?.name}</h2>
          <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
          <h3>{restaurant?.area}</h3>
          <h3>{restaurant?.city}</h3>
          <h3>{restaurant?.avgRating} stars</h3>
          <h3>{restaurant?.costForTwoMsg}</h3>
        </div>
        <div className="m-5 p-5 shadow-lg bg-pink-50">
          <h1 className="font-bold">Menu</h1>
          <ul>
            {menu?.itemCards?.map((item, x) => (
              <div key={x}>
                <li>{item.card.info.name} <button className="m-5 p-5 shadow-lg bg-green-50" onClick={() => handleAddItem(item.card.info.name)}>Add Item</button></li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default RestaurantMenu;
