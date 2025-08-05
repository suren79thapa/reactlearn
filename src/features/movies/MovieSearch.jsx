import React from "react";
import { useSearchParams } from "react-router";
import { useSearchMovieQuery } from "./movieApi";
import SearchInput from "./SearchInput";
import MoviesList from "./MoviesList";

export default function MovieSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { isLoading, error, data } = useSearchMovieQuery(
    searchParams.get("search")
  );
  if (isLoading) return <h1>Loading....</h1>;
  if (error) return <h1>{error.data.status_message}</h1>;

  return (
    <div>
      <SearchInput setSearchParams={setSearchParams} />
      {data && <MoviesList movies={data.results} />}
    </div>
  );
}
