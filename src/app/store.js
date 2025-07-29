import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../features/users/userSlice";
import { countSlice } from "../features/counterSlice";

export const store = configureStore({
  reducer: {
    userSlice: userSlice.reducer,
    countSlice: countSlice.reducer,
  },
});
