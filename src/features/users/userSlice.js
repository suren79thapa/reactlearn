import { createSlice } from "@reduxjs/toolkit";
import { getFromLocal, setToLocal } from "../../local/local";

export const userSlice = createSlice({
  name: "userSlice",
  initialState: { users: getFromLocal() },
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
      setToLocal(state.users);
    },
    updateUser: (state, action) => {},
    removeUsers: (state, action) => {
      state.users.splice(action.payload, 1);
      setToLocal(state.users);
    },
  },
});
export const { addUser } = userSlice.actions;
