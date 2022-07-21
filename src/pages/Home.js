import React, { useState } from "react";
import Categories from "../components/categories/Categories";
import Header from "../components/header/Header";
import Menus from "../components/menus/Menus";
import data from "../helper/data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const Home = () => {
  const [menuItems, setMenuItems] = useState(data);

  return (
    <div>
      <Header />
      <Categories allCategories={allCategories} />
      <Menus menuItems={menuItems} />
    </div>
  );
};

export default Home;
