import React, { useState } from "react";
import "./enjoyfood.css";

const foodItems = [
  { name: "North Indian", image: "north_indian.png" },
  { name: "Biryani", image: "biryani.png" },
  { name: "Pizza", image: "pizza.png" },
  { name: "Burger", image: "burger.png" },
  { name: "Cake", image: "cake.png" },
  { name: "Chinese", image: "chinese.png" },
  { name: "Momo", image: "momo.png" },
  { name: "Shawarma", image: "shawarma.png" },
  { name: "Paratha", image: "paratha.png" },
  { name: "Pasta", image: "pasta.png" },
  { name: "Rasmalai", image: "rasmalai.png" },
  { name: "Chole Bhature", image: "chole_bhature.png" },
  { name: "Kebab", image: "kebab.png" },
  { name: "Ice Cream", image: "ice_cream.png" },
];

const EnjoyFood = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleItems = 7;

  const handleNext = () => {
    setStartIndex((prev) => Math.min(prev + 1, foodItems.length - visibleItems));
  };

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div className="food-carousel">
      <button className="nav-btn" onClick={handlePrev} disabled={startIndex === 0}>
        &#8592;
      </button>
      <div className="food-list">
        {foodItems.slice(startIndex, startIndex + visibleItems).map((food, index) => (
          <div className="food-item" key={index}>
            <img src={food.image} alt={food.name} className="food-image" />
            <p>{food.name}</p>
          </div>
        ))}
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
