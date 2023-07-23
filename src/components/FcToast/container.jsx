"use client";

import React from "react";
import { useToast } from "./context";
import Toast from "./toast";

const Container = () => {
  const { toasts, removeToast } = useToast([]);

  return (
    <div className="toast-container">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          id={toast.id}
          message={toast.message}
          duration={toast.duration}
          onClose={(id) => removeToast(id)}
          type={toast.type}
        />
      ))}
    </div>
  );
};

export { Container };
