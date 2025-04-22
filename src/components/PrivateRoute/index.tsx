import { JSX, useEffect } from "react";

import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import { useToast } from "../../contexts/ToastContext";

interface Props {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
  const { isAuthenticated } = useAuth();
  const { showToast } = useToast();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated) {
      showToast("Usuário não logado!", "error");
    }
  }, [isAuthenticated, location.pathname]);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
