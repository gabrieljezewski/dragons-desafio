import { Dragon } from "../../services/dragon/dragon.types";

export type ModalType = "details" | "add" | "edit" | "delete" | null;

export interface IUseListDragonsControllerProps {
  dragons: Dragon[];
  loading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  notFound: boolean;
  activeModal: ModalType;
  handleOpenModal: (type: ModalType) => void;
  handleCloseModal: () => void;
  handleDragonById: (id: string) => Promise<void>;
  handleDeleteDragon: () => Promise<void>;
  selectedDragon: Dragon | null;
  fetchDragons: (searchTerm?: string) => Promise<void>;
  handleEditButton: (e: React.MouseEvent, id: string) => void;
  handleDeleteButton: (e: React.MouseEvent, id: string) => void;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
}
