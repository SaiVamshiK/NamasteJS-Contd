import { useState,useContext } from "react";
import { Title } from "./Title";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const {user} = useContext(UserContext);
  const cartItems = useSelector(store => store.cart.items);
  // subscribing to the cart items
  // We have just subscribed to the Cart Slice's items.
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10 ">
          <li className="px-2">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2">
            <Link to='/cart'>Cart - 4 items</Link>
          </li>
          {/* <h2 className="font-bold p-2 m-2">{user.name}</h2> */}
          {/* {isLoggedIn ? (
            <>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => {
                  setIsLoggedIn(true);
                }}
              >
                Login
              </button>
            </>
          )} */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
