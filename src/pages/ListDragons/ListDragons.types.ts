import { Dragon } from "../../services/dragon/dragon.types";

export interface IUseListDragonsControllerProps {
  dragons: Dragon[];
  loading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  notFound: boolean;
  isModalOpen: boolean;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleDragonById: (id: string) => Promise<void>;
  selectedDragon: Dragon | null;
  truncateText: (text: string, maxLength: number) => string;
}
