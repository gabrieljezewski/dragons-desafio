import { useEffect, useState } from "react";

import { Dragon } from "../../services/dragon/dragon.types";
import { getDragonById, getDragons } from "../../services/dragon";

import { IUseListDragonsControllerProps } from "./ListDragons.types";

export const useListDragonsController = (): IUseListDragonsControllerProps => {
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDragonId, setSelectedDragonId] = useState<string | null>(null);
  const [selectedDragon, setSelectedDragon] = useState<Dragon | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const fetchDragons = async (searchTerm = "") => {
    try {
      setLoading(true);
      setNotFound(false);
      const data = await getDragons(searchTerm);
      setDragons(data);
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
    setIsModalOpen(true);
    setSelectedDragonId(id);

    try {
      const dragon = await getDragonById(id);
      setSelectedDragon(dragon);
    } catch (error) {
      console.error("Erro ao buscar dragão:", error);
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
    isModalOpen,
    handleOpenModal,
    handleCloseModal,
    handleDragonById,
    selectedDragon,
    truncateText,
  };
};
