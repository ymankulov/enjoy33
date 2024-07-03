import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
  admin: JSON.parse(localStorage.getItem("admin")) || {},
  mainPassword: JSON.parse(localStorage.getItem("password")) || "0000",
};

export const ProductSlice = createSlice({
  name: "GET_PRODUCT",
  initialState,
  reducers: {
    getProduct(state, action) {
      state.product = action.payload;
    },
    adminValidate(state, action) {
      state.admin = action.payload;
      localStorage.setItem("admin", JSON.stringify(state.admin));
    },
    adminLogOut(state, action) {
      localStorage.removeItem("admin");
      state.admin = {};
    },
    adminChange(state, action) {
      state.mainPassword = action.payload;
      localStorage.setItem("password", JSON.stringify(state.mainPassword));
    },
  },
});

export const { getProduct, adminValidate, adminLogOut, adminChange } =
  ProductSlice.actions;
export default ProductSlice.reducer;
