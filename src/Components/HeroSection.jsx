import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
      <div className="search-section">
        <div className="location-input">
          <span className="location-icon">📍</span>
          <input type="text" placeholder="Enter your delivery location" />
          <span className="dropdown-icon">▼</span>
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search for restaurant, item or more" />
          <span className="search-icon">🔍</span>
        </div>
      </div>
      <div className="categories">
        <div className="category-card">
          <h3>FOOD DELIVERY</h3>
          <p>FROM RESTAURANTS</p>
          <span className="discount">UPTO 60% OFF</span>
          <img src="https://i.imgur.com/oHrPevh.png" alt="Food" />
          <span className="arrow">➡</span>
        </div>
        <div className="category-card">
          <h3>INSTAMART</h3>
          <p>INSTANT GROCERY</p>
          <span className="discount">UPTO 60% OFF</span>
          <img src="https://i.imgur.com/TkLRtYA.png" alt="Grocery" />
          <span className="arrow">➡</span>
        </div>
        <div className="category-card">
          <h3>DINEOUT</h3>
          <p>EAT OUT & SAVE MORE</p>
          <span className="discount">UPTO 50% OFF</span>
          <img src="https://i.imgur.com/8Bf8voS.png" alt="Dineout" />
          <span className="arrow">➡</span>
        </div>
        <div className="category-card">
          <h3>GENIE</h3>
          <p>PICK-UP & DROP</p>
          <img src="https://i.imgur.com/2YZ5wRy.png" alt="Genie" />
          <span className="arrow">➡</span>
        </div>
      </div>
    </div>
  );
}
