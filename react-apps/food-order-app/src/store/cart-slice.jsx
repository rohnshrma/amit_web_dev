import { createSlice } from "@reduxjs/toolkit";

const initialCartState = {
  cartItems: [],
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      const exisitingItem = state.item.find(
        (item) => item.id === action.payload.id
      );

      if (exisitingItem) {
        exisitingItem.quantity += newItem.quantity;
        state.total += newItem.price;
      } else {
        state.item.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
        });
        state.total += newItem.price;
      }
    },
  },
});
