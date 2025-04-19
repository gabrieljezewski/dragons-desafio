export interface IUseLoginControllerProps {
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
  handleLogin: () => void;
}
