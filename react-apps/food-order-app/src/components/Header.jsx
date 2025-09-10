import React from "react";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="shadow bg-dark px-5 py-2 text-light d-flex justify-content-between align-items-center">
      <h4>Fooodieee</h4>
      <h5 className="badge badge-light">
        <FaCartShopping />
        Cart 0
      </h5>
    </div>
  );
};

export default Header;
