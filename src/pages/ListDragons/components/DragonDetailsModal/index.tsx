import Button from "../../../../components/Button";
import Collapse from "../../../../components/Collapse";
import Loading from "../../../../components/Loading";
import Modal from "../../../../components/Modal";
import Text from "../../../../components/Text";

import { formatDate } from "../../../../utils/formatDate";

import { Dragon } from "../../../../services/dragon/dragon.types";

import * as S from "./styles";

interface DragonDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedDragon: Dragon | null;
}

export const DragonDetailsModal = ({
  isOpen,
  onClose,
  selectedDragon,
}: DragonDetailsModalProps) => {
  return (
    <Modal title="Dados do dragão" isOpen={isOpen} onClose={onClose}>
      {selectedDragon ? (
        <S.ContentDragon>
          <Text fontSize="20px" color="var(--dark-gray)" fontWeight="bold">
            Nome: <Text fontSize="20px">{selectedDragon?.name}</Text>
          </Text>
          <S.Box>
            <Text fontSize="20px" color="var(--dark-gray)" fontWeight="bold">
              Tipo:
            </Text>
            <S.Tag>
              <Text fontSize="14px" fontWeight="bold" color="var(--purple-900)">
                {selectedDragon?.type}
              </Text>
            </S.Tag>
          </S.Box>
          <S.Date>
            <Text fontSize="20px" color="var(--dark-gray)" fontWeight="bold">
              Data de criação:{" "}
              <Text fontSize="20px">
                {formatDate(selectedDragon?.createdAt)}
              </Text>
            </Text>
          </S.Date>
          <S.Divider />
          <S.Histories>
            <Text fontSize="20px" color="var(--dark-gray)" fontWeight="bold">
              Histórias:
            </Text>
            {selectedDragon.histories.length === 0 ? (
              <Text fontSize="16px" color="var(--dark-gray)" fontWeight="bold">
                Dragão não possui histórias.
              </Text>
            ) : (
              selectedDragon.histories.map((history, index) => (
                <Collapse key={index} title={`História ${index + 1}`}>
                  <Text fontSize="16px">{history}</Text>
                </Collapse>
              ))
            )}
          </S.Histories>
          <S.ContainerButton>
            <Button text="Voltar" width="30%" onClick={onClose} />
          </S.ContainerButton>
        </S.ContentDragon>
      ) : (
        <Loading />
      )}
    </Modal>
  );
};
