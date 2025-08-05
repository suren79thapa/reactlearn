import { useSearchParams } from "react-router";
import { useGetPopularMoviesQuery } from "./movieApi";
import MoviesList from "./MoviesList";
import { Button } from "@material-tailwind/react";

export default function PopularMovie() {
  const [searchParams, setSearchParams] = useSearchParams();
  const page = searchParams.get("page") ?? 1;
  const { data, error, isLoading } = useGetPopularMoviesQuery(page);
  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.data.status_message}</h1>;
  return (
    <div>
      {data && <MoviesList movies={data.results} />}
      <div className="flex gap-5 justify-center items-center mb-5">
        <Button
          onClick={() => setSearchParams({ page: Number(page) - 1 })}
          disabled={page === 1}
        >
          Prev
        </Button>
        <h1 className="font-bold text-xl">{page}</h1>
        <Button onClick={() => setSearchParams({ page: Number(page) + 1 })}>
          Next
        </Button>
      </div>
    </div>
  );
}
