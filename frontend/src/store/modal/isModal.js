import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "isModalOpen",
  initialState: { value: false },
  reducers: {
    toggleModal: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
