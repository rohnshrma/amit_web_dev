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

  if (action.type === "DELETE") {
    const exisitingItem = state.cartItems.find(
      (item) => item.id === action.payload
    );

    if (exisitingItem) {
      const updatedCartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
      const updatedTotal = updatedCartItems.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      return {
        cartItems: updatedCartItems,
        total: updatedTotal,
      };
    }
  }

  if (action.type === "UPDATE") {
    console.log("Updating");

    const { id, updateQty } = action.payload;

    console.log(id, updateQty);
    const exisitingItem = state.cartItems.find((item) => item.id === id);

    console.log("exisiting item at the time of update", exisitingItem);

    if (exisitingItem) {
      if (exisitingItem.quantity + updateQty <= 0) {
        console.log("getting zero");
        const updatedCartItems = state.cartItems.filter(
          (item) => item.id !== id
        );
        const updatedTotal = updatedCartItems.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
        return {
          cartItems: updatedCartItems,
          total: updatedTotal,
        };
      } else {
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + updateQty }
            : item
        );
        const updatedTotal = updatedCartItems.reduce((acc, item) => {
          return acc + item.price * item.quantity;
        }, 0);
        return {
          cartItems: updatedCartItems,
          total: updatedTotal,
        };
      }
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
  const deleteFromCartHandler = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };
  const updateCartHandler = (id, updateQty) => {
    dispatch({ type: "UPDATE", payload: { id, updateQty } });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCartHandler,
        deleteFromCartHandler,
        updateCartHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
