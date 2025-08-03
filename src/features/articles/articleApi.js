import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const articleApi = createApi({
  reducerPath: "articleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://688f1c0bf21ab1769f883d74.mockapi.io",
  }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => ({
        url: "/articles",
        method: "GET",
      }),
    }),
  }),
});
export const { useGetArticlesQuery, useLazyGetArticlesQuery } = articleApi;
