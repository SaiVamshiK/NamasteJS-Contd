import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

export const RestaurantCard = ({ restaurant,user }) => {
  let IMG_URL = IMG_CDN_URL + restaurant?.data?.cloudinaryImageId;
  let REST_URL = '/restaurant/' + restaurant.data.id; 
  return (
    <div className="w-[200px] p-2 m-2 shadow-lg">
      <img src={IMG_URL} />
      <h2 className="font-bold text-xl">
        <Link to={REST_URL}>{restaurant?.data?.name}</Link>
      </h2>
      <h3>{restaurant?.data?.cuisines.join(", ")}</h3>
      <h4>{restaurant?.data?.avgRating} stars</h4>
      <h5>{user.name}</h5>
      {/* App.js->Body.js->RestaurantCard.js - Props Drilling */}
    </div>
  );
};
// [200px] keeps the size dynamic - customizable
// 