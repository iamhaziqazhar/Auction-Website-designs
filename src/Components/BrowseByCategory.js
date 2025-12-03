// BrowseByCategory.jsx
import React from "react";
import "./BrowseByCategory.css"

const categories = ["All Categories", "Vehicles", "Real Estate", "Art & Collectibles", "Industrial Machinery"];

const BrowseByCategory = () => {
  return (
    <section className="browse-category">
      <h2 style={{fontWeight:900}}>Browse by Category</h2>
      <div className="category-buttons">
        {categories.map((cat, index) => (
          <button key={index} className={index === 0 ? "active" : ""}>
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BrowseByCategory;
