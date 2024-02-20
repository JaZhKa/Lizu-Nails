import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./active/isActive";

export const store = configureStore({
  reducer: { isActive: activeReducer },
});
