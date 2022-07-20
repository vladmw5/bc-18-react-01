import { createSlice } from "@reduxjs/toolkit";
import { authGoogle } from "./login-operation";

const initialState = {
  name: "",
  email: "",
  isLogin: false,
  token: "",
};

export const loginSlise = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authGoogle.fulfilled]: (state, { payload }) => {
      state.name = payload.displayName;
      state.email = payload.email;
      state.isLogin = true;
      state.token = payload.accessToken;
    },
  },
});
