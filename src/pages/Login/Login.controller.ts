import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { useToast } from "../../contexts/ToastContext";

import { IUseLoginControllerProps } from "./Login.types";

export const useLoginController = (): IUseLoginControllerProps => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      const success = login(email, password);

      setIsLoading(false);

      if (success) {
        showToast("Login realizado com sucesso!", "success");
        setTimeout(() => {
          navigate("/listar-dragoes");
        }, 1000);
      } else {
        showToast("E-mail ou senha inválidos!", "error");
      }
    }, 1000);
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    isLoading,
    handleLogin,
  };
};
