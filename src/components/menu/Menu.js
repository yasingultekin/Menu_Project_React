import React from "react";
import "./Menu.css";

const Menu = ({ menuItems }) => {
  return (
    <div className="main-container">
      {menuItems.map((item) => {
        const { id, img, desc, price, title } = item;
        return (
          <div className="menu-container">
            <img src={img} alt="" />
            <div className="info">
              <header>
                <h4>{title}</h4>
                <h3>${price}</h3>
                <p>{desc}</p>
              </header>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
