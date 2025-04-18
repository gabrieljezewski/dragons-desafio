import { Dragon } from "../../services/dragon/dragon.types";

export interface IUseListDragonsControllerProps {
  dragons: Dragon[];
  loading: boolean;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  notFound: boolean;
}
