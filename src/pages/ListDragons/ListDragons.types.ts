import { Dragon } from "../../services/dragon/dragon.types";

export interface IUseListDragonsControllerProps {
  dragons: Dragon[];
  loading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  notFound: boolean;
  activeModal: ModalType;
  setSelectedDragonId: React.Dispatch<React.SetStateAction<string | null>>;
  handleOpenModal: (type: ModalType) => void;
  handleCloseModal: () => void;
  handleDragonById: (id: string) => Promise<void>;
  handleDeleteDragon: () => Promise<void>;
  selectedDragon: Dragon | null;
}

export type ModalType = "details" | "delete" | null;
