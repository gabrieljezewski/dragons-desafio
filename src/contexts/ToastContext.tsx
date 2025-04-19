import React, { createContext, useContext, useState, ReactNode } from "react";

import Toast from "../components/Toast";

type ToastType = "success" | "error";

interface ToastContextProps {
  showToast: (message: string, type: ToastType, duration?: number) => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toasts, setToasts] = useState<
    { message: string; type: ToastType; id: number }[]
  >([]);
  const [idCounter, setIdCounter] = useState(0);

  const showToast = (message: string, type: ToastType, duration = 3000) => {
    const id = idCounter;
    setIdCounter(idCounter + 1);
    setToasts((prev) => [...prev, { message, type, id }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          message={toast.message}
          type={toast.type}
          onClose={() => {
            setToasts((prev) => prev.filter((t) => t.id !== toast.id));
          }}
        />
      ))}
    </ToastContext.Provider>
  );
};
