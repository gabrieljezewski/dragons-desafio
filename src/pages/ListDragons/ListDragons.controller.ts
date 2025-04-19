import { useEffect, useState } from "react";

import { Dragon } from "../../services/dragon/dragon.types";
import { deleteDragon, getDragonById, getDragons } from "../../services/dragon";

import { useToast } from "../../contexts/ToastContext";

import { IUseListDragonsControllerProps } from "./ListDragons.types";

type ModalType = "details" | "delete" | null;

export const useListDragonsController = (): IUseListDragonsControllerProps => {
  const { showToast } = useToast();
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedDragonId, setSelectedDragonId] = useState<string | null>(null);
  const [selectedDragon, setSelectedDragon] = useState<Dragon | null>(null);

  const handleOpenModal = (type: ModalType) => {
    setActiveModal(type);
  };

  const handleCloseModal = () => {
    setActiveModal(null);
  };

  const fetchDragons = async (searchTerm = "") => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getDragons(searchTerm);

      const sortedData = data.sort((a, b) =>
        a.name.localeCompare(b.name, "pt", { sensitivity: "base" })
      );

      setDragons(sortedData);
    } catch (error: any) {
      if (error.response?.status === 404) {
        setDragons([]);
        setNotFound(true);
      } else {
        console.error("Erro ao buscar dragões:", error);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleDragonById = async (id: string) => {
    setActiveModal("details");
    setSelectedDragonId(id);

    try {
      const dragon = await getDragonById(id);
      setSelectedDragon(dragon);
    } catch (error) {
      console.error("Erro ao buscar dragão:", error);
    }
  };

  const handleDeleteDragon = async () => {
    if (!selectedDragonId) return;

    try {
      await deleteDragon(selectedDragonId);
      handleCloseModal();
      fetchDragons();
      showToast("Dragão deletado com sucesso!", "success");
    } catch (error) {
      console.error("Erro ao deletar dragão:", error);
      showToast("Erro ao deletar dragão", "error");
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      fetchDragons(search);
    }, 500);

    return () => clearTimeout(timeout);
  }, [search]);

  return {
    dragons,
    loading,
    setSearch,
    search,
    notFound,
    activeModal,
    setSelectedDragonId,
    handleOpenModal,
    handleCloseModal,
    handleDragonById,
    handleDeleteDragon,
    selectedDragon,
  };
};
