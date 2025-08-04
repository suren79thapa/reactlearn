import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "coktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    getCocktail: builder.query({
      query: () => ({
        url: "/filter.php",
        params: { i: "Coffee" },
        method: "GET",
      }),
      providesTags: ["cocktl"],
    }),
    getCocktailCategory: builder.query({
      query: () => ({
        url: "/list.php",
        params: { i: "list" },
        method: "GET",
      }),
      providesTags: ["cocktal"],
    }),
  }),
});
export const {
  useGetCocktailQuery,
  useLazyGetCocktailQuery,
  useGetCocktailCategoryQuery,
} = cocktailApi;
