import React, { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useToast } from "../../../../contexts/ToastContext";

import { createDragon, updateDragon } from "../../../../services/dragon";
import { Dragon, PostDragon } from "../../../../services/dragon/dragon.types";

import { formDragonSchema } from "../../../../validation/formDragon";

import {
  DragonFormValues,
  IUseDragonFormControllerProps,
} from "./dragonFormModal.types";

interface UseDragonFormControllerParams {
  isOpen: boolean;
  mode: "add" | "edit";
  dragonToEdit?: Dragon | null;
  onClose: () => void;
  onRefreshList: () => void;
}

export const useDragonFormController = ({
  isOpen,
  mode,
  dragonToEdit,
  onClose,
  onRefreshList,
}: UseDragonFormControllerParams): IUseDragonFormControllerProps => {
  const { showToast } = useToast();
  const [histories, setHistories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<DragonFormValues>({
    resolver: yupResolver(formDragonSchema),
  });

  const handleAddHistory = (e?: React.MouseEvent) => {
    e?.preventDefault();
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

  const onSubmit = async (data: DragonFormValues) => {
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

  return {
    register,
    handleSubmit,
    errors,
    histories,
    isLoading,
    handleAddHistory,
    handleRemoveHistory,
    handleHistoryChange,
    onSubmit,
  };
};
