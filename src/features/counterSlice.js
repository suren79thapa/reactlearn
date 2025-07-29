import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
  name: "countSlice",
  initialState: { value: 0 },
  reducers: {
    addValue: (state) => {
      state.value += 1;
    },
    decrementValue: (state) => {
      state.value -= 1;
    },
    resetValue: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { addValue, decrementValue, resetValue } = countSlice.actions;
