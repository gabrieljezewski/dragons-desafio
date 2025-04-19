import React, { useState } from "react";

import { ExpandIcon } from "../../assets/icons/expandIcon";

import * as S from "./styles";

type CollapseProps = {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
};

const Collapse: React.FC<CollapseProps> = ({
  title,
  children,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.Container>
      <S.Header onClick={toggleCollapse}>
        <S.Title>{title}</S.Title>
        <S.Icon isOpen={isOpen}>
          <ExpandIcon />
        </S.Icon>
      </S.Header>
      {isOpen && <S.Content>{children}</S.Content>}
    </S.Container>
  );
};

export default Collapse;
