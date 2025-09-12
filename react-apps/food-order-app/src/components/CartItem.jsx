import { useContext } from "react";
import CartContext from "../CartContext";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";

const CartItem = ({ item }) => {
  const { deleteFromCartHandler, updateCartHandler } = useContext(CartContext);
  const { id, price, name, quantity } = item;
  return (
    <div className="border p-2 rounded my-3 cart-item d-flex justify-content-between align-items-center">
      <div className="details">
        <h4>{name}</h4>
        <h6>₹ {price}</h6>
      </div>
      <div className="actions  d-flex justify-content-between align-items-center">
        <button
          className="btn btn-sm btn-primary"
          onClick={() => updateCartHandler(id, -1)}
        >
          <FaMinus />
        </button>
        <h5>{quantity}</h5>
        <button
          className="btn btn-sm btn-primary"
          onClick={() => updateCartHandler(id, 1)}
        >
          <FaPlus />
        </button>
        <button
          className="btn btn-sm btn-outline-danger"
          onClick={() => deleteFromCartHandler(id)}
        >
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
