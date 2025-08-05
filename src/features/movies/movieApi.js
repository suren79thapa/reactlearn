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
    getPopularMovies: builder.query({
      query: (page) => ({
        url: "/movie/popular",
        params: {
          api_key: "0b47ed5205ac3e480099d056fab0945c",
          // the page we think is not getting the value that is page
          page,
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
export const {
  useGetNowPlayingMoviesQuery,
  useSearchMovieQuery,
  useGetPopularMoviesQuery,
} = movieApi;
