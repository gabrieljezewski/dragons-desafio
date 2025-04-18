import React, { useEffect } from "react";

import { SuccessIcon } from "../../assets/icons/successIcon";
import { ErrorIcon } from "../../assets/icons/errorIcon";

import * as S from "./styles";

type ToastType = "success" | "error";

type ToastProps = {
  message: string;
  duration?: number;
  onClose: () => void;
  type?: ToastType;
};

const Toast: React.FC<ToastProps> = ({
  message,
  duration = 3000,
  onClose,
  type = "success",
}) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const renderIcon = () => {
    if (type === "success") return <SuccessIcon />;
    if (type === "error") return <ErrorIcon />;
    return null;
  };

  return (
    <S.ToastContainer type={type}>
      <S.IconWrapper>{renderIcon()}</S.IconWrapper>
      <S.Message>{message}</S.Message>
    </S.ToastContainer>
  );
};

export default Toast;
