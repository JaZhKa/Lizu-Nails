import { createSlice } from "@reduxjs/toolkit";

const activeSlice = createSlice({
  name: "isActive",
  initialState: { value: false },
  reducers: {
    toggleActive: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleActive } = activeSlice.actions;
export default activeSlice.reducer;
