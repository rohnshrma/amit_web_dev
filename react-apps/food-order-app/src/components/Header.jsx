import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../CartContext";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className="shadow bg-dark px-5 py-2 text-light d-flex justify-content-between align-items-center">
      <Link to="/" className="text-light text-decoration-none">
        <h2>Fooodieee</h2>
      </Link>
      <Link to="/cart" className="text-light text-decoration-none">
        <h2 className="badge badge-light">
          <FaCartShopping />
          Cart {cart.cartItems.length}
        </h2>
      </Link>
    </div>
  );
};

export default Header;
