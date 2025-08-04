import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router-dom";

import NotFound from "./notfound/NotFound";
import RootLayOut from "./components/RootLayOut";
import ArticleList from "./features/articles/ArticleList";
import AddArticleForm from "./features/articles/AddArticleForm";
import AddCocktailList from "./features/cocktail/AddCocktailList";
import CategoryCotailList from "./features/cocktail/CategoryCotailList";
export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <ArticleList />,
        },
        {
          path: "add-article",
          element: <AddArticleForm />,
        },

        {
          path: "cocktailcat",
          element: <CategoryCotailList />,
        },
        {
          path: "cocktailcat/:category",
          element: <AddCocktailList />,
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
