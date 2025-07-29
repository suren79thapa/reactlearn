import { createBrowserRouter } from "react-router";

import { RouterProvider } from "react-router-dom";

import NotFound from "./notfound/NotFound";
import RootLayOut from "./components/RootLayOut";
import UserList from "./features/users/UserList";
import CounterList from "./features/counter/CounterList";
import CountCheck from "./features/counter/CountCheck";

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
        {
          path: "counter-list",
          element: <CounterList />,
        },
        {
          path: "counter-check",
          element: <CountCheck />,
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
