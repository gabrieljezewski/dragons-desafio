import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import GlobalStyles from "./styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>
);
