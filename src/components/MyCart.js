import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/CartSlice";

const MyCart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  // useSelector is used to subscribe to the store.
  // This is the place we tell what we are subscribing to.
  // If we write store => store : it subscribes to the entire store.
  // If we write just store => store.cart : it subscribes to the cart of the store.

  const dispatch = useDispatch();

  const clearExistingCart = () => {
    dispatch(clearCart());
  }
  return (
    <div>
      <div className="flex">
        <h1 className="font-bold p-5 m-5">Cart Items - {cartItems.length}</h1>
        <button className="p-3 m-3 bg-red-50" onClick={() => clearExistingCart()}>
            Clear Cart
        </button>
      </div>
      <div className="flex">
        {cartItems.map((item, idx) => (
          <FoodItem key={idx} item = {item} index = {idx}/>
        ))}
      </div>
    </div>
  );
};
export default MyCart;
// This is a major performance issue.
// If we subscribe to the entire store, each time any slice changes this component is re rendered again and again.
// So instead it is better to subscribe to only a slice or even better just a particular variable of a slice.
