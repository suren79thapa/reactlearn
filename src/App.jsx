import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router-dom";

import NotFound from "./notfound/NotFound";
import RootLayOut from "./components/RootLayOut";
import UserList from "./features/users/UserList";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayOut />,
      children: [
        {
          index: true,
          element: <UserList />,
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
