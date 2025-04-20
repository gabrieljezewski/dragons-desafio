import {
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface ILoginFormData {
  email: string;
  password: string;
}

export interface IUseLoginControllerProps {
  register: UseFormRegister<ILoginFormData>;
  handleSubmit: UseFormHandleSubmit<ILoginFormData>;
  onSubmit: (data: ILoginFormData) => void;
  errors: FieldErrors<ILoginFormData>;
  isLoading: boolean;
}
