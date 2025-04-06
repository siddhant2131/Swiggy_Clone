import React, { useState, useEffect } from "react";
import "./HeroSection.css";

export default function HeroSection() {
  const [locationQuery, setLocationQuery] = useState("");
  const [restaurantQuery, setRestaurantQuery] = useState("");
  const [locations, setLocations] = useState([]);
  const [showLocations, setShowLocations] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState(null);

  // Fetch locations when query changes
  useEffect(() => {
    if (locationQuery.length > 2) {
      const timer = setTimeout(() => {
        fetchLocations(locationQuery);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setLocations([]);
    }
  }, [locationQuery]);

  const fetchLocations = async (query) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/locations/search?query=${query}`
      );
      const data = await response.json();
      setLocations(data);
      setShowLocations(true);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setLocationQuery(`${location.name}, ${location.city}`);
    setShowLocations(false);
  };

  return (
    <div className="hero-container">
      <h1>Order food & groceries. Discover best restaurants. Swiggy it!</h1>
      <div className="search-section">
        <div className="location-input">
          <span className="location-icon">📍</span>
          <input
            type="text"
            placeholder="Enter your delivery location"
            value={locationQuery}
            onChange={(e) => setLocationQuery(e.target.value)}
            onFocus={() => locations.length > 0 && setShowLocations(true)}
          />
          <span className="dropdown-icon">▼</span>
          
          {showLocations && locations.length > 0 && (
            <div className="locations-dropdown">
              {locations.map((location) => (
                <div
                  key={location._id}
                  className="location-item"
                  onClick={() => handleLocationSelect(location)}
                >
                  <span className="location-pin">📍</span>
                  <div className="location-details">
                    <div className="location-name">{location.name}</div>
                    <div className="location-address">
                      {location.address}, {location.city}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="search-input">
          <input
            type="text"
            placeholder="Search for restaurant, item or more"
            value={restaurantQuery}
            onChange={(e) => setRestaurantQuery(e.target.value)}
          />
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