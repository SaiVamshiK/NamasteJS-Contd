import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "dummy",
    email: "dummy email",
  },
});

export default UserContext;
