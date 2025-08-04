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
      providesTags: ["Articles"],
    }),
    createArticle: builder.mutation({
      query: (data) => ({
        url: "/articles",
        body: data,
        method: "POST",
      }),
      invalidatesTags: ["Articles"],
    }),
    removeArticle: builder.mutation({
      query: (id) => ({
        url: `/articles/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Articles"],
    }),
  }),
});
export const {
  useGetArticlesQuery,
  useCreateArticleMutation,
  useLazyGetArticlesQuery,
  useRemoveArticleMutation,
} = articleApi;
