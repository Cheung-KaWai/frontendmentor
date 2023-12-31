import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Planets from "../challenges/planets/Planets";
import { Revange } from "../challenges/revange/Revange";

export default function Routing() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/planets",
      element: <Planets />,
    },
    {
      path: "/revange",
      element: <Revange />,
    },
  ]);
  return <RouterProvider router={router} />;
}
