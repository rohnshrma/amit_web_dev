import { useContext } from "react";
import CartContext from "../CartContext";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "./CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div id="cart" className="p-3 border rounded shadow-sm bg-light">
      <h2>
        Cart <FaShoppingCart />
        {cart.cartItems.length > 0 && (
          <ul>
            {cart.cartItems.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </ul>
        )}
        {cart.cartItems.length > 0 && <hr />}
        {cart.cartItems.length > 0 && (
          <div className="total d-flex justify-content-between">
            <h3>Total : </h3>
            <h3>₹{cart.total.toFixed(2)}</h3>
          </div>
        )}
      </h2>
    </div>
  );
};

export default Cart;
