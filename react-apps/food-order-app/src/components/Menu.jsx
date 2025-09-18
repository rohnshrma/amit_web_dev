import React from "react";
import { menuData } from "../data.js";

import Dish from "./Dish";

const Menu = () => {
  return (
    <div
      id="menu"
      className="p-4  row border rounded shadow-sm justify-content-between"
    >
      {menuData.length > 0 &&
        menuData.map((dish) => <Dish key={dish.id} dish={dish} />)}
    </div>
  );
};

export default Menu;
