import { configureStore } from "@reduxjs/toolkit";
import { authReducer, extraIdReducer } from "./reducers/auth";
import { errorReducer } from "./reducers/error";

const userData = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : {};

const userId = localStorage.getItem("userId")
  ? JSON.parse(localStorage.getItem("userId"))
  : null;

const INITIL_REDUCER = {
  auth: { user: userData },
  extra: { user: userId },
};

export const store = configureStore({
  reducer: {
    auth: authReducer,
    extra: extraIdReducer,
    error: errorReducer,
  },
  preloadedState: INITIL_REDUCER,
});
