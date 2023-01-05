import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart-slice";
import categoriesSlice from "./slices/categories-slice";
import productsSlice from "./slices/products-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    cart: cartSlice,
    categories: categoriesSlice,
  },
});
