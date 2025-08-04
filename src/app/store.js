import { configureStore } from "@reduxjs/toolkit";
import { articleApi } from "../features/articles/articleApi";
import { cocktailApi } from "../features/cocktail/cocktailApi";

export const store = configureStore({
  reducer: {
    [articleApi.reducerPath]: articleApi.reducer,
    [cocktailApi.reducerPath]: cocktailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([
      articleApi.middleware,
      cocktailApi.middleware,
    ]),
});
