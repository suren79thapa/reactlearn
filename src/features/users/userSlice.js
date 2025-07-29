import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: { users: [11, 22, 33, 44] },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});
export const { addUser } = userSlice.actions;
