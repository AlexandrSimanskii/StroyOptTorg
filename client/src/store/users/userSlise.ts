import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

export const userSlice = createSlice({
  name: "user",

  initialState,

  reducers: {
    signInSuccess: (state, action) => {
      return action.payload;
    },
    logOut: (state) => {
      state = null;
      return state;
    },

    //
  },
});

export const {
  signInSuccess,
  logOut,
  // updateUserStart,
  // updateUserSuccess,
  // updateUserFailure,
  // deleteUserStart,
  // deleteUserSuccess,
  // deleteUserFailure,
  // logOutUserStart,
  // logOutUserSuccess,
  // logOutUserFailure,
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
