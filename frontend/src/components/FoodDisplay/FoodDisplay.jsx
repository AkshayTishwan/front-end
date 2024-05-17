import "./FoodDisplay.css";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import { useContext } from "react";
import { food_list } from "../../assets/assets";
const FoodDisplay = ({ category }) => {
  // const { food_list } = useContext(StoreContext);

  return (
    <div className="" id="food-display">
      <h2>Top Dishes Near You</h2>
      <div className="food-di splay-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
