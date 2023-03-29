import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {

  let [inputValue, setInputValue] = useState("");
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [appName, setAppName] = useState("Food Villa Restaurants");

  async function getAllRestaurants() {
    let restaurants = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.413503886211508&lng=78.4943925216794&page_type=DESKTOP_WEB_LISTING"
    );
    let response = await restaurants.json();
    response = response?.data?.cards[2]?.data?.data?.cards;
    console.log(response);
    setAllRestaurants(response);
    setFilteredList(response);
  }

  useEffect(() => {
    getAllRestaurants();
  }, []);

  let isOnline = useOnline();
  if(!isOnline){
    return (
      <h1>Please check your interet connection...</h1>
    );
  }
 
  if (allRestaurants?.length === 0) {
    return (
      <>
        <ShimmerUI />
      </>
    );
  } else {
    return (
      <>
        <div className="p-5 bg-color-50 m-2">
          <input
            type="text"
            className="p-2 m-2 rounded-lg focus:bg-green-50"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              let tempFilter = filterData(e.target.value,allRestaurants);
              setFilteredList(tempFilter);
            }}
          />
          <button
            className="p-2 m-2 bg-pink-50 rounded-lg hover:bg-green-50"
            onClick={() => {
              if (appName === "Food Villa Restaurants") {
                setAppName("Food Villa updated Restaurants");
              } else {
                setAppName("Food Villa Restaurants");
              }
            }}
          >
            Search
          </button>
          <h1>{appName}</h1>
        </div>
        {filteredList?.length !== 0 ? (
          <div className="flex flex-wrap">
            {filteredList?.map((restaurant, index) => (
              <RestaurantCard restaurant={restaurant} key={index} />
            ))}
          </div>
        ) : (
          <>
            <h2>No matching restaurants</h2>
          </>
        )}
      </>
    );
  }
};
export default Body;
