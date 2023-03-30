import { useContext } from "react";
import UserContext from "../utils/UserContext";
const Footer = () => {
  const {user} = useContext(UserContext);
  return (
    <div>
      <h1>Developed by {user.name}</h1>
      <h1>Footer</h1>
    </div>
  );
};

export default Footer;
