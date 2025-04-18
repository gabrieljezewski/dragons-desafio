import React from "react";

import * as S from "./styles";

type ButtonProps = {
  text: string;
  width?: string;
  onClick?: () => void;
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  text,
  width,
  onClick,
  disabled = false,
}) => {
  return (
    <S.Button width={width} onClick={onClick} disabled={disabled}>
      {text}
    </S.Button>
  );
};

export default Button;
