import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

import { IUseLoginControllerProps } from "./Login.types";

export const useLoginController = (): IUseLoginControllerProps => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");
  const [toastMessage, setToastMessage] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleLogin = () => {
    const success = login(email, password);
    if (success) {
      setToastType("success");
      setToastMessage("Login realizado com sucesso!");
      setShowToast(true);
      setTimeout(() => {
        navigate("/listar-dragoes");
      }, 1000);
    } else {
      setToastType("error");
      setToastMessage("E-mail ou senha inválidos!");
      setShowToast(true);
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    toastType,
    toastMessage,
    showToast,
    setShowToast,
    handleLogin,
  };
};
