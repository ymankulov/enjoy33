import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: JSON.parse(localStorage.getItem("basket")) || [],
 quantity: 29,
};
export const addBasketSlice = createSlice({
  name: "TO_BASKET",
  initialState,
  reducers: {
    addToBasket(state, action) {
      let newBasket = [...state.basket, action.payload];
      localStorage.setItem("basket", JSON.stringify(newBasket));
      state.basket = newBasket;

    },
  },
});
export const { addToBasket } = addBasketSlice.actions;
export default addBasketSlice.reducer;
