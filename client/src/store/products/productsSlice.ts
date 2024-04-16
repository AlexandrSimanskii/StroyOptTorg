import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import { Product } from "../../types/types";

type Products = Product[];

const initialState: Products = [];

export const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {
    // getProducts: (state, action: PayloadAction<Products>) => {
    //   state = [...action.payload];
      getProducts: (state, action: PayloadAction<Products>) => {
        return action.payload; // Corrected to return new state
    },
  },
});

export const { getProducts } = productSlice.actions;
export const selectCount = (state: RootState) => state.counter.value;

export default productSlice.reducer;
