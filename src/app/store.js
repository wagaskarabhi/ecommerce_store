// import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "../features/cartSlice";

// // Import your wishlistReducer
// import wishlistReducer from "../features/cartSlice"; // Assuming you have a wishlistSlice

// export const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//     wishlist: wishlistReducer, // Include wishlistReducer in the store
//   },
// });
// store.js
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import wishlistReducer from "../features/cartSlice";
import searchReducer from "../features/searchSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    search: searchReducer,
  },
});
