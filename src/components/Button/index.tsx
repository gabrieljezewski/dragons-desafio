import React from "react";

import * as S from "./styles";

type ButtonProps = {
  variant?: "primary" | "secondary";
  text: string;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  width,
  onClick,
  disabled = false,
}) => {
  return (
    <S.Button
      variant={variant}
      width={width}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </S.Button>
  );
};

export default Button;
