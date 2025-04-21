import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import Modal from "../../../../components/Modal";
import Input from "../../../../components/Input";
import Textarea from "../../../../components/Textarea";
import Button from "../../../../components/Button";
import Loading from "../../../../components/Loading";

import { useToast } from "../../../../contexts/ToastContext";

import { createDragon, updateDragon } from "../../../../services/dragon";
import { Dragon, PostDragon } from "../../../../services/dragon/dragon.types";

import { formDragonSchema } from "../../../../validation/formDragon";

import { TrashIcon } from "../../../../assets/icons/trashIcon";

import * as S from "./styles";

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
  const { showToast } = useToast();
  const [histories, setHistories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formDragonSchema),
  });

  const handleAddHistory = (e: React.MouseEvent) => {
    e.preventDefault();
    setHistories((prev) => [...prev, ""]);
  };

  const handleRemoveHistory = (index: number) => {
    setHistories((prev) => prev.filter((_, i) => i !== index));
  };

  const handleHistoryChange = (index: number, value: string) => {
    const updated = [...histories];
    updated[index] = value;
    setHistories(updated);
  };

  const onSubmit = async (data: { name: string; type: string }) => {
    const filteredHistories = histories.filter((h) => h.trim() !== "");

    const dragonData: PostDragon = {
      name: data.name,
      type: data.type,
      ...(filteredHistories.length > 0 && { histories: filteredHistories }),
    };

    try {
      if (mode === "add") {
        await createDragon(dragonData);
        showToast("Dragão adicionado com sucesso!", "success");
      } else if (mode === "edit" && dragonToEdit) {
        await updateDragon(dragonToEdit.id, dragonData);
        showToast("Dragão atualizado com sucesso!", "success");
      }

      onClose();
      onRefreshList?.();
    } catch (error) {
      console.error("Erro ao salvar dragão:", error);
      showToast("Erro ao salvar dragão", "error");
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    if (mode === "edit" && dragonToEdit) {
      setIsLoading(true);

      reset({
        name: dragonToEdit.name,
        type: dragonToEdit.type,
      });
      setHistories(dragonToEdit.histories || []);

      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }

    if (mode === "add") {
      reset({
        name: "",
        type: "",
      });
      setHistories([]);
      setIsLoading(false);
    }
  }, [isOpen, mode, dragonToEdit, reset]);

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
