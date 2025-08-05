import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { createApi } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.themoviedb.org/3",
  }),
  endpoints: (builder) => ({
    getNowPlayingMovies: builder.query({
      query: () => ({
        url: "/movie/now_playing",
        params: {
          api_key: "0b47ed5205ac3e480099d056fab0945c",
        },
        method: "GET",
      }),
    }),
    searchMovie: builder.query({
      query: (q) => ({
        url: "/search/movie",
        params: { query: q, api_key: "0b47ed5205ac3e480099d056fab0945c" },
        method: "GET",
      }),
    }),
  }),
});
export const { useGetNowPlayingMoviesQuery, useSearchMovieQuery } = movieApi;
