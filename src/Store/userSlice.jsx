import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: { user: null },
  reducers: {
    logIn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state, action) => {
      state.user = null;
    },
  },
});
