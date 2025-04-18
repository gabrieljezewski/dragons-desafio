import React from "react";

import * as S from "./styles";

type TextProps = {
  children: React.ReactNode;
  fontSize?: string;
  color?: string;
};

const Text: React.FC<TextProps> = ({ children, fontSize, color }) => {
  return (
    <S.Text fontSize={fontSize} color={color}>
      {children}
    </S.Text>
  );
};

export default Text;
