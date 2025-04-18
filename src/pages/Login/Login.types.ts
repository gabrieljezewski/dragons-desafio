export interface IUseLoginControllerProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  toastType: "success" | "error";
  toastMessage: string;
  showToast: boolean;
  setShowToast: (value: boolean) => void;
  handleLogin: () => void;
}
