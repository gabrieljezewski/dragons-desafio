import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/Login";
import ListDragons from "../pages/ListDragons";
import PrivateRoute from "../components/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/listar-dragoes",
    element: (
      <PrivateRoute>
        <ListDragons />
      </PrivateRoute>
    ),
  },
]);
