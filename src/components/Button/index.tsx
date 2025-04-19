import React from "react";

import Loading from "../Loading";

import * as S from "./styles";

type ButtonProps = {
  variant?: "primary" | "secondary";
  text: string | React.ReactNode;
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  width,
  height,
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <S.Button
      variant={variant}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {loading ? <Loading variant="secondary" /> : text}
    </S.Button>
  );
};

export default Button;
