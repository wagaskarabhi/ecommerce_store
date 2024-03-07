// rootReducer.js
import { combineReducers } from "redux";
import cartReducer from "../features/cartSlice";
import wishlistReducer from "../features/cartSlice";
import searchReducer from "../features/searchSlice"; // Add search reducer

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  search: searchReducer,
});

export default rootReducer;
