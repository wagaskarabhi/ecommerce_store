// // cartSlice.js
import { createSlice } from "@reduxjs/toolkit";
import productData from "../db/productData";

const calculateTotal = (items) => {
  const total = items.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );
  const quantity = items.reduce((acc, item) => acc + item.quantity, 0);
  return { total, quantity };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    total: 0,
    quantity: 0,
    productData: productData,
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, type, quantity, price, img } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.type === type
      );

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({ id, type, quantity, price, img });
      }

      const { total, quantity: totalQuantity } = calculateTotal(state.items);
      state.total = total;
      state.quantity = totalQuantity;
    },
    removeFromCart: (state, action) => {
      const { id, type } = action.payload;
      state.items = state.items.filter(
        (item) => !(item.id === id && item.type === type)
      );

      const { total, quantity } = calculateTotal(state.items);
      state.total = total;
      state.quantity = quantity;
    },
    increaseQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.type === type
      );

      if (existingItem) {
        existingItem.quantity += 1;
      }

      const { total, quantity } = calculateTotal(state.items);
      state.total = total;
      state.quantity = quantity;
    },
    decreaseQuantity: (state, action) => {
      const { id, type } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.type === type
      );

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }

      const { total, quantity } = calculateTotal(state.items);
      state.total = total;
      state.quantity = quantity;
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.quantity = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
