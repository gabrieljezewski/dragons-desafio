import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

import GlobalStyles from "./styles";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyles />
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
