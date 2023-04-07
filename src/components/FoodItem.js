import { IMG_CDN_URL } from "../config";

const FoodItem = ({ name, imageId, description, price }) => {
    let IMG_URL = IMG_CDN_URL + imageId;
   return (
    <div>
      <div className="w-[200px] p-2 m-2 shadow-lg">
        <img src={IMG_URL} />
        <h3>{name}</h3>
        <h5>Price : {price/100}</h5>
        {/* App.js->Body.js->RestaurantCard.js - Props Drilling */}
      </div>
    </div>
  );
};
export default FoodItem;
