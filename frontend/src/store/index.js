import { configureStore } from "@reduxjs/toolkit";
import activeReducer from "./active/isActive";
import loadedReducer from "./load/isFormLoaded";

export const store = configureStore({
  reducer: { isActive: activeReducer, isLoaded: loadedReducer },
});
