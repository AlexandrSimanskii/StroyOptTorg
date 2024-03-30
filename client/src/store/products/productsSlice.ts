import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

interface Form {
  price: number[];
  category: string;
  brand: string[];
  limit: number;
  sort: string;
}

const initialState: Form = {
  price: [0, Infinity],
  category: "",
  brand: [""],
  limit: 12,
  sort: "price_asc",
};

export const counterSlice = createSlice({
  name: "form",

  initialState,
  reducers: {
    change: (state) => {
      state;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
