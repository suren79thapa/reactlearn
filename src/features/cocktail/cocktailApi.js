import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const cocktailApi = createApi({
  reducerPath: "cocktailApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.thecocktaildb.com/api/json/v1/1",
  }),
  endpoints: (builder) => ({
    // getCocktail: builder.query({
    //   query: (category) => ({
    //     url: "/filter.php",
    //     params: { i: category },
    //     method: "GET",
    //   }),
    //   providesTags: ["cocktl"],
    // }),
    getCocktailCategory: builder.query({
      query: () => ({
        url: "/list.php",
        params: { i: "list" },
        method: "GET",
      }),
      providesTags: ["cocktal"],
    }),
    getCocktailsByCategory: builder.query({
      query: (category) => ({
        url: "/filter.php",
        params: { i: category },
        method: "GET",
      }),
      providesTags: ["cocktlByCat"],
    }),
  }),
});
export const {
  useGetCocktailCategoryQuery,
  useGetCocktailsByCategoryQuery,
  useLazyGetCocktailsByCategoryQuery,
} = cocktailApi;
