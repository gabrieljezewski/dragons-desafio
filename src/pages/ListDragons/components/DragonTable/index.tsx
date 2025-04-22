import Button from "../../../../components/Button";
import Loading from "../../../../components/Loading";
import Text from "../../../../components/Text";

import { formatDate } from "../../../../utils/formatDate";
import { truncateText } from "../../../../utils/truncateText";

import { ModalType } from "../../ListDragons.types";

import * as S from "./dragonTable.styles";

interface Dragon {
  id: string;
  name: string;
  type?: string;
  createdAt?: string;
}

interface DragonTableProps {
  dragons: Dragon[];
  loading: boolean;
  notFound: boolean;
  handleOpenModal: (type: ModalType) => void;
  handleDragonById: (id: string) => void;
  handleEditButton: (e: React.MouseEvent, id: string) => void;
  handleDeleteButton: (e: React.MouseEvent, id: string) => void;
}

export const DragonTable = ({
  dragons,
  loading,
  notFound,
  handleOpenModal,
  handleDragonById,
  handleEditButton,
  handleDeleteButton,
}: DragonTableProps) => {
  return (
    <S.Table>
      <S.TableHeader>
        <Text fontSize="14px" color="var(--gray-900)" fontWeight="bold">
          NOME
        </Text>
        <Text fontSize="14px" color="var(--gray-900)" fontWeight="bold">
          TIPO
        </Text>
        <Text fontSize="14px" color="var(--gray-900)" fontWeight="bold">
          DATA DE CRIAÇÃO
        </Text>
        <Text fontSize="14px" color="var(--gray-900)" fontWeight="bold">
          AÇÕES
        </Text>
      </S.TableHeader>

      {loading ? (
        <S.TableBody>
          <Loading />
        </S.TableBody>
      ) : notFound ? (
        <S.TableBody>
          <S.EmptyMessage>
            <Text fontSize="16px" color="var(--gray-700)">
              Não encontramos nenhum resultado para esta busca.
            </Text>
            <Text fontSize="16px" color="var(--gray-700)">
              Verifique o nome digitado e tente novamente.
            </Text>
          </S.EmptyMessage>
        </S.TableBody>
      ) : (
        <S.TableBody>
          {dragons.map((dragon) => (
            <S.TableRow
              key={dragon.id}
              onClick={() => {
                handleDragonById(dragon.id);
                handleOpenModal("details");
              }}
            >
              <Text fontSize="16px" fontWeight="bold">
                {truncateText(dragon.name, 20)}
              </Text>
              <S.Tag>
                <Text
                  fontSize="12px"
                  fontWeight="bold"
                  color="var(--purple-900)"
                >
                  {truncateText(dragon?.type || "Tipo não informado", 15)}
                </Text>
              </S.Tag>
              <Text fontSize="14px" color="var(--gray-800)">
                {formatDate(dragon?.createdAt ?? "Data não disponível")}
              </Text>
              <S.ContainerActions>
                <Button
                  variant="secondary"
                  text="Alterar"
                  width="90px"
                  height="36px"
                  onClick={(e) => handleEditButton(e, dragon.id)}
                />
                <Button
                  text="Deletar"
                  width="90px"
                  height="36px"
                  onClick={(e) => handleDeleteButton(e, dragon.id)}
                />
              </S.ContainerActions>
            </S.TableRow>
          ))}
        </S.TableBody>
      )}
    </S.Table>
  );
};
