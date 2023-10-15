import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "../App";
import Planets from "../challenges/planets/Planets";

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
  ]);
  return <RouterProvider router={router} />;
}
