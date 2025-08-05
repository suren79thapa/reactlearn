import { useGetNowPlayingMoviesQuery } from "./features/movies/movieApi";
import MoviesList from "./features/movies/MoviesList";
import SearchInput from "./features/movies/SearchInput";

export default function Home() {
  const { isLoading, error, data } = useGetNowPlayingMoviesQuery();
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data.status_message}</h1>;
  // console.log(data.results);
  return (
    <div>
      <SearchInput isHome={true} />
      {data && <MoviesList movies={data.results} />}
    </div>
  );
}
