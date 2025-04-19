import api from "../api";
import { Dragon } from "./dragon.types";

export const getDragons = async (search = ""): Promise<Dragon[]> => {
  try {
    const response = await api.get("/dragon", {
      params: { search },
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar dragões:", error);
    throw error;
  }
};

export const getDragonById = async (id: string): Promise<Dragon> => {
  try {
    const response = await api.get(`/dragon/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Erro ao buscar o dragão com ID ${id}:`, error);
    throw error;
  }
};
