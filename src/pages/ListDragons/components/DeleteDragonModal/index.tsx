import React from "react";

import Modal from "../../../../components/Modal";
import Text from "../../../../components/Text";
import Button from "../../../../components/Button";

import * as S from "./styles";

interface DeleteDragonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onDelete: () => void;
}

export const DeleteDragonModal: React.FC<DeleteDragonModalProps> = ({
  isOpen,
  onClose,
  onDelete,
}) => {
  return (
    <Modal title="Deletar Dragão" isOpen={isOpen} onClose={onClose}>
      <S.ContentModal>
        <Text fontSize="16px">
          Tem certeza que deseja mesmo deletar o dragão da lista?
        </Text>
        <S.ContainerButton>
          <Button
            variant="secondary"
            text="Cancelar"
            width="140px"
            onClick={onClose}
          />
          <Button text="Deletar" width="140px" onClick={onDelete} />
        </S.ContainerButton>
      </S.ContentModal>
    </Modal>
  );
};
