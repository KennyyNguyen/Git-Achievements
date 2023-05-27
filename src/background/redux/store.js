import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/projectSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
