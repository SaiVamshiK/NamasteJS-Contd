import { useEffect, useState } from "react";
import { RestaurantCard } from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  let [inputValue, setInputValue] = useState("");
  let [allRestaurants, setAllRestaurants] = useState([]);
  let [filteredList, setFilteredList] = useState([]);
  let [appName, setAppName] = useState("Food Villa Restaurants");

  async function getAllRestaurants() {
    let restaurants = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
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

 
  if (allRestaurants?.length === 0) {
    return (
      <>
        <ShimmerUI />
      </>
    );
  } else {
    return (
      <>
        <div className="search-container">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              let tempFilter = allRestaurants.filter((restaurant) => {
                if (restaurant.data.name.includes(e.target.value)) {
                  return true;
                }
                return false;
              });
              setFilteredList(tempFilter);
            }}
          />
          <button
            className="search-btn"
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
          <div className="restaurant-list">
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
