import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router-dom";
import NotFound from "./notfound/NotFound";
import RootLayOut from "./components/RootLayOut";
import Home from "./Home";
import MovieSearch from "./features/movies/MovieSearch";
import PopularMovie from "./features/movies/PopularMovie";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "movie-search",
          element: <MovieSearch />,
        },
        {
          path: "popular-movie",
          element: <PopularMovie />,
        },
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
