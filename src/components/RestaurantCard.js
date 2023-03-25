import { IMG_CDN_URL } from "../config";
import { Link } from "react-router-dom";

export const RestaurantCard = ({ restaurant }) => {
  let IMG_URL = IMG_CDN_URL + restaurant?.data?.cloudinaryImageId;
  let REST_URL = '/restaurant/' + restaurant.data.id; 
  return (
    <div className="card">
      <img src={IMG_URL} />
      <h2>
        <Link to={REST_URL}>{restaurant?.data?.name}</Link>
      </h2>
      <h3>{restaurant?.data?.cuisines.join(", ")}</h3>
      <h4>{restaurant?.data?.avgRating} stars</h4>
    </div>
  );
};
