"use client";

import { createContext, useContext, useState } from "react";
import { Container } from "./container";
const Context = createContext();

const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const toast = ({ message, duration = 3000, type = "default" }) => {
    const newToast = { id: Date.now(), message, duration, type };
    setToasts([...toasts, newToast]);
  };

  toast.error = ({ message, duration = 3000 }) => {
    toast({ message, duration, type: "error" });
  };

  toast.warning = ({ message, duration = 3000 }) => {
    toast({ message, duration, type: "warning" });
  };

  toast.success = ({ message, duration = 3000 }) => {
    toast({ message, duration, type: "success" });
  };

  toast.info = ({ message, duration = 3000 }) => {
    toast({ message, duration, type: "info" });
  };

  const removeToast = (id) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  const values = {
    toasts,
    toast,
    removeToast,
  };

  return (
    <Context.Provider value={values}>
      <Container />
      {children}
    </Context.Provider>
  );
};

export const useToast = () => useContext(Context);
export default ToastProvider;
