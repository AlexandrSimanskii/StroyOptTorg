import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "../../types/types";

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
    signInSuccess: (state, action) => {
      return action.payload;
    },
    logOut: (state) => {
      state = initialState;
      return state;
    },
    addFavorite: (state, action: PayloadAction<string>) => {
      state.favorite.push(action.payload);
      return state;
    },
    deleteFavorite: (state, action: PayloadAction<string>) => {
      state.favorite = state.favorite.filter((item) => item !== action.payload);
    },
  },
});

export const { signInSuccess, logOut, addFavorite, deleteFavorite } =
  userSlice.actions;

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
