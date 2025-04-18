import { useEffect, useState } from "react";

import { Dragon } from "../../services/dragon/dragon.types";
import { getDragons } from "../../services/dragon";

import { IUseListDragonsControllerProps } from "./ListDragons.types";

export const useListDragonsController = (): IUseListDragonsControllerProps => {
  const [dragons, setDragons] = useState<Dragon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

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
  };
};
