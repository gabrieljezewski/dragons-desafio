import React from "react";

import * as S from "./styles";

type ButtonProps = {
  variant?: "primary" | "secondary";
  text: string;
  width?: string;
  height?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  text,
  width,
  height,
  onClick,
  disabled = false,
}) => {
  return (
    <S.Button
      variant={variant}
      width={width}
      height={height}
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </S.Button>
  );
};

export default Button;
