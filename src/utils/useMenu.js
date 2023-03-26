import { useEffect, useState } from "react";

const useMenu = (id) => {
  const [menu, setMenu] = useState({});

  let EACH_REST_URL =
    "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.413503886211508&lng=78.4943925216794&restaurantId=" +
    id;

  async function getMenuInfo() {
    const data = await fetch(EACH_REST_URL);
    let json = await data.json();
    json =
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        .card;
    setMenu(json);
  }

  useEffect(() => {
    getMenuInfo();
  }, []);
  return menu;
};

export default useMenu;
