import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType, UserCartType } from "../../types/types";

const initialState: UserType = {
  _id: "",
  email: "",
  phone: "",
  username: "",
  region: "",
  cart: [],
  favorite: [],
  order: [],
};

export const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    signInSuccessSlice: (state, action) => {
      return action.payload;
    },
    logOutSlise: (state) => {
      state = initialState;
      return state;
    },
    addFavoriteSlice: (state, action: PayloadAction<string>) => {
      state.favorite.push(action.payload);
    },
    deleteFavoriteSlice: (state, action: PayloadAction<string>) => {
      state.favorite = state.favorite.filter((item) => item !== action.payload);
    },
    deleteAllFavoritesSlice: (state) => {
      state.favorite = [];
    },
    addInCartSlice: (state, action: PayloadAction<UserCartType>) => {
      const existingIndex = state.cart.findIndex(
        (item) => item._id === action.payload._id
      );
      if (existingIndex === -1) {
        state.cart.push(action.payload);
      } else {
        state.cart[existingIndex] = action.payload;
      }
    },
    addFavoriteInCartSlice: (state, action: PayloadAction<string[]>) => {
      const data = action.payload.map((item) => ({ _id: item, count: 1 }));
      state.cart.push(...data);
    },

    deleteFromCartSlice: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
  },
});

export const {
  signInSuccessSlice,
  logOutSlise,
  addFavoriteSlice,
  deleteFavoriteSlice,
  deleteAllFavoritesSlice,
  addInCartSlice,
  addFavoriteInCartSlice,
  deleteFromCartSlice,
} = userSlice.actions;

export default userSlice.reducer;

//   updateUserStart: (state) => {
//     state.loading = true;
//   },
//   updateUserSuccess: (state, action) => {
//     state.currentUser = action.payload;
//     state.loading = false;
//     state.error = null;
//   },
//   updateUserFailure: (state, action) => {
//     state.error = action.payload;
//     state.loading = false;
//   },
//   deleteUserStart: (state) => {
//     state.loading = true;
//   },
//   deleteUserSuccess: (state) => {
//     state.currentUser = null;
//     state.error = null;
//     state.loading = false;
//   },
//   deleteUserFailure: (state, action) => {
//     state.error = action.payload;
//     state.loading = false;
//   },

//   logOutUserStart: (state) => {
//     state.loading = true;
//   },
//   logOutUserSuccess: (state) => {
//     state.currentUser = null;
//     state.error = null;
//     state.loading = false;
//   },
//   logOutUserFailure: (state, action) => {
//     state.error = action.payload;
//     state.loading = false;
//   },
