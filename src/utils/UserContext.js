import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Sai Vamshi",
    email: "saivamshi.k.24@gmail.com",
  },
});

export default UserContext;
