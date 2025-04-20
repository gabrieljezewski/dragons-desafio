import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

import { useAuth } from "../../contexts/AuthContext";
import { useToast } from "../../contexts/ToastContext";

import { IUseLoginControllerProps } from "./Login.types";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail é obrigatório")
    .email("Digite um e-mail válido"),
  password: yup.string().required("Senha é obrigatória"),
});

export const useLoginController = (): IUseLoginControllerProps => {
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const success = login(data.email, data.password);

    if (success) {
      showToast("Login realizado com sucesso!", "success");
      setTimeout(() => navigate("/listar-dragoes"), 1000);
    } else {
      showToast("E-mail ou senha inválidos!", "error");
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isLoading: isSubmitting,
  };
};
