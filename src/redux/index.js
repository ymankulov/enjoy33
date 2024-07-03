import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/productSlice";
import  addBasketSlice  from "./reducers/BasketSlice";

export const store = configureStore({
  reducer: {
    allProduct: ProductSlice,
    bas: addBasketSlice,
  },
});
