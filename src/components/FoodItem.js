import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/CartSlice";

const FoodItem = ({item,index}) => {
  let IMG_URL = IMG_CDN_URL + item?.card?.info?.imageId;
  const dispatch = useDispatch();

  const removeCurrentItem = (index) => {
    dispatch(removeItem(index))
  };

  return (
    <div>
      <div className="w-[200px] p-2 m-2 shadow-lg">
        <img src={IMG_URL} />
        <h3>{item?.card?.info?.name}</h3>
        <div className="flex">
          <h5>Price : {item?.card?.info?.price / 100}</h5>
          <button className="p-2 m-2 bg-blue-50" onClick={() => removeCurrentItem(index)}>Remove Item</button>
        </div>
      </div>
    </div>
  );
};
export default FoodItem;
