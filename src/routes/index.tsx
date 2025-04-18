import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import ListDragons from "../pages/ListDragons";

export const router = createBrowserRouter([
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "listar-dragoes",
    element: <ListDragons />,
  },
]);
