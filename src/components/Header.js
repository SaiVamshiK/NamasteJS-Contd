import { useState } from "react";
import { Title } from "./Title";

const Header = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li src='/about'>About</li>
          <li>Contact</li>
          <li>Cart</li>
          {isLoggedIn ? (
            <>
              <button onClick={() => {
                setIsLoggedIn(false);
              }}>Logout</button>
            </>
          ) : (
            <>
              <button onClick={() => {
                setIsLoggedIn(true)
              }}>Login</button>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
