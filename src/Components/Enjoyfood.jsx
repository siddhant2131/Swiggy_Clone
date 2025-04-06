import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../Components/Enjoyfood.css";

const foodItems = [
  { name: "North Indian", image: "https://th.bing.com/th/id/OIP.RHZ9QSWvPfAeTAS6E0fCLAHaE8?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Biryani", image: "https://th.bing.com/th/id/OIP.wBu0Xsb774mtzvjhq1C3DgHaE8?w=249&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Pizza", image: "https://example.com/pizza.jpg" },
  { name: "Burger", image: "https://th.bing.com/th/id/OIP.QMfTfmOQurM_v-QNX6o1KAHaE8?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Cake", image: "https://via.placeholder.com/150" },
  { name: "Chinese", image: "https://via.placeholder.com/150" },
  { name: "Momo", image: "https://th.bing.com/th/id/OIP.Q2POOJBHbV02MQg2egblfwHaEK?w=318&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Shawarma", image: "https://th.bing.com/th/id/OIP.S--IOAZAZWnaaVF-fhJH3QHaEK?w=333&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Paratha", image: "https://th.bing.com/th/id/OIP.zPBw1dcn2Wiu9JXZ17RJsQHaE8?w=279&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7" },
  { name: "Pasta", image: "https://example.com/pasta.jpg" },
  { name: "Rasmalai", image: "https://example.com/rasmalai.jpg" },
  { name: "Chole Bhature", image: "https://via.placeholder.com/150" },
  { name: "Kebab", image: "https://ts3.mm.bing.net/th?id=OIP.t1cXxa_oTSkpdqO6H9jRpAHaE8&pid=15.1" },
  { name: "Ice Cream", image: "https://example.com/icecream.jpg" },
];

const EnjoyFood = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 8;
  const navigate = useNavigate();

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 4, foodItems.length - visibleItems));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 4, 0));
  };

  const handleFoodClick = (foodName) => {
    navigate(`/food/${foodName.toLowerCase().replace(/\s+/g, '-')}`);
  };

  const visibleFoodItems = foodItems.slice(startIndex, startIndex + visibleItems);
  const firstRow = visibleFoodItems.slice(0, visibleFoodItems.length / 2);
  const secondRow = visibleFoodItems.slice(visibleFoodItems.length / 2);

  return (
    <div className="food-carousel">
      <button className="nav-btn" onClick={handlePrev} disabled={startIndex === 0}>
        &#8592;
      </button>

      <div className="food-container">
        <div className="food-row">
          {firstRow.map((food, index) => (
            <div className="food-item" key={index} onClick={() => handleFoodClick(food.name)}>
              <img
                src={food.image}
                alt={food.name}
                className="food-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <p>{food.name}</p>
            </div>
          ))}
        </div>

        <div className="food-row">
          {secondRow.map((food, index) => (
            <div className="food-item" key={index + firstRow.length} onClick={() => handleFoodClick(food.name)}>
              <img
                src={food.image}
                alt={food.name}
                className="food-image"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/150";
                }}
              />
              <p>{food.name}</p>
            </div>
          ))}
        </div>
      </div>

      <button
        className="nav-btn"
        onClick={handleNext}
        disabled={startIndex >= foodItems.length - visibleItems}
      >
        &#8594;
      </button>
    </div>
  );
};

export default EnjoyFood;
