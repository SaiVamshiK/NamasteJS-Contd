import { IMG_CDN_URL } from "../config";

export const RestaurantCard = ({ restaurant }) => {
    let IMG_URL = IMG_CDN_URL + restaurant?.data?.cloudinaryImageId;
  return (
    <div className="card">
      <img src={IMG_URL} />
      <h2>{restaurant?.data?.name}</h2>
      <h3>{restaurant?.data?.cuisines.join(", ")}</h3>
      <h4>{restaurant?.data?.avgRating} stars</h4>
    </div>
  );
};
