import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router-dom";

import NotFound from "./notfound/NotFound";
import RootLayOut from "./components/RootLayOut";
import ArticleList from "./features/articles/ArticleList";
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
      ],
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}
