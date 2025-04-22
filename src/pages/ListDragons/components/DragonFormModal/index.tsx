import Modal from "../../../../components/Modal";
import Input from "../../../../components/Input";
import Textarea from "../../../../components/Textarea";
import Button from "../../../../components/Button";
import Loading from "../../../../components/Loading";

import { Dragon } from "../../../../services/dragon/dragon.types";

import { TrashIcon } from "../../../../assets/icons/trashIcon";

import { useDragonFormController } from "./dragonFormModal.controller";

import * as S from "./dragonFormModal.styles";

interface DragonFormModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRefreshList: () => void;
  mode: "add" | "edit";
  dragonToEdit?: Dragon | null;
}

export const DragonFormModal: React.FC<DragonFormModalProps> = ({
  isOpen,
  onClose,
  onRefreshList,
  mode,
  dragonToEdit,
}) => {
  const {
    register,
    handleSubmit,
    errors,
    histories,
    isLoading,
    handleAddHistory,
    handleRemoveHistory,
    handleHistoryChange,
    onSubmit,
  } = useDragonFormController({
    isOpen,
    onClose,
    onRefreshList,
    mode,
    dragonToEdit,
  });

  return (
    <Modal
      title={mode === "add" ? "Adicionar Dragão" : "Editar Dragão"}
      isOpen={isOpen}
      onClose={onClose}
    >
      <S.ContentModal>
        <form onSubmit={handleSubmit(onSubmit)}>
          <S.Box>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <Input
                  label="Nome"
                  placeholder="Informe o nome do dragão"
                  {...register("name")}
                  error={!!errors.name}
                  errorMessage={errors.name?.message}
                />
                <Input
                  label="Tipo"
                  placeholder="Informe o tipo do dragão"
                  {...register("type")}
                  error={!!errors.type}
                  errorMessage={errors.type?.message}
                />
                {histories.map((history, index) => (
                  <S.HistoryWrapper key={index}>
                    <Textarea
                      label={`História ${index + 1}`}
                      value={history}
                      onChange={(e) =>
                        handleHistoryChange(index, e.target.value)
                      }
                    />
                    <S.IconWrapper>
                      <TrashIcon onClick={() => handleRemoveHistory(index)} />
                    </S.IconWrapper>
                  </S.HistoryWrapper>
                ))}
                <Button
                  variant="secondary"
                  text="Adicionar história"
                  width="160px"
                  onClick={handleAddHistory}
                />
              </>
            )}
          </S.Box>
          <S.ContainerButton>
            <Button
              variant="secondary"
              text="Voltar"
              width="140px"
              onClick={onClose}
            />
            <Button
              text={mode === "add" ? "Adicionar" : "Alterar"}
              width="140px"
            />
          </S.ContainerButton>
        </form>
      </S.ContentModal>
    </Modal>
  );
};
