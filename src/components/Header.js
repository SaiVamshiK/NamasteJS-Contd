import { useState } from "react";
import { Title } from "./Title";
import { Link } from "react-router-dom";

const Header = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to='/cart'>Cart</Link>
          </li>
          {isLoggedIn ? (
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
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
