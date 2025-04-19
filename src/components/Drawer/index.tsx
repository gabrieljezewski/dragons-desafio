import React from "react";

import Text from "../Text";

import { ErrorIcon } from "../../assets/icons/errorIcon";

import * as S from "./styles";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  title,
}) => {
  return (
    <>
      <S.Overlay isOpen={isOpen} onClick={onClose} />
      <S.DrawerContainer isOpen={isOpen}>
        <S.Header>
          <Text fontSize="20px" fontWeight="bold">
            {title}
          </Text>
          <S.CloseButton onClick={onClose}>
            <ErrorIcon color="var(--gray-700)" />
          </S.CloseButton>
        </S.Header>
        {children}
      </S.DrawerContainer>
    </>
  );
};

export default Drawer;
