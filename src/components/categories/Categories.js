import React from "react";
import "./Categories.css";

const Categories = ({ allCategories }) => {
  return (
    <div className="btn-container">
      {allCategories.map((categoryItem, index) => {
        return (
          <button className="category-button" key={index}>
            {categoryItem}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
