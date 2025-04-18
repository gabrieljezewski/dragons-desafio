import React from "react";

import * as S from "./styles";

type TextProps = {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
  fontWeight?: "default" | "bold";
};

const Text: React.FC<TextProps> = ({
  children,
  fontSize,
  color,
  fontWeight,
}) => {
  return (
    <S.Text fontSize={fontSize} color={color} fontWeight={fontWeight}>
      {children}
    </S.Text>
  );
};

export default Text;
