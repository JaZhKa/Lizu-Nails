import { createSlice } from "@reduxjs/toolkit";

const loadedSlice = createSlice({
  name: "isLoaded",
  initialState: { value: true },
  reducers: {
    toggleLoaded: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleLoaded } = loadedSlice.actions;
export default loadedSlice.reducer;
