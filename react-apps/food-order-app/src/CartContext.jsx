import { createContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
  total: 0,
};

const cartReducer = (state, action) => {
  console.log(state, action);

  if (action.type === "ADD") {
    const exisitingItem = state.cartItems.find(
      (item) => item.id === action.payload.id
    );

    console.log("Exisiting item => ", exisitingItem);

    if (exisitingItem) {
      const updatedCartItems = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );

      console.log("updated cart items", updatedCartItems);

      const updatedTotal = updatedCartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      console.log("updated cart total", updatedTotal);
      return {
        cartItems: updatedCartItems,
        total: updatedTotal,
      };
    } else {
      return {
        cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      };
    }
  }
  return state;
};

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  console.log("cart", cart);

  const addToCartHandler = (dish) => {
    dispatch({ type: "ADD", payload: dish });
  };

  return (
    <CartContext.Provider value={{ cart, addToCartHandler }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
