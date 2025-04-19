import React from "react";

import Text from "../Text";

import { ErrorIcon } from "../../assets/icons/errorIcon";

import * as S from "./styles";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;

  return (
    <>
      <S.Overlay onClick={onClose} />
      <S.ModalContainer>
        <S.Header>
          <Text fontSize="20px" color="var(--dark-gray)" fontWeight="bold">
            {title}
          </Text>
          <S.CloseButton onClick={onClose}>
            <ErrorIcon color="var(--gray-700)" />
          </S.CloseButton>
        </S.Header>
        <S.Divider />
        <S.Content>{children}</S.Content>
      </S.ModalContainer>
    </>
  );
};

export default Modal;
