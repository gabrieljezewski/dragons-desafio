import {
  FieldErrors,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";

export interface DragonFormValues {
  name: string;
  type: string;
}

export interface IUseDragonFormControllerProps {
  register: UseFormRegister<DragonFormValues>;
  handleSubmit: UseFormHandleSubmit<DragonFormValues>;
  errors: FieldErrors<DragonFormValues>;
  histories: string[];
  isLoading: boolean;
  handleAddHistory: (e?: React.MouseEvent) => void;
  handleRemoveHistory: (index: number) => void;
  handleHistoryChange: (index: number, value: string) => void;
  onSubmit: (data: DragonFormValues) => Promise<void>;
}
