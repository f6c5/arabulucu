"use client";

import React, { useEffect, useState } from "react";
import "./toast.css";

const Toast = ({ id, message, duration, onClose, type }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  useEffect(() => {
    if (!show) {
      onClose(id);
    }
  }, [show, id, onClose]);

  return show ? <div className={`toast ${type}`}>{message}</div> : null;
};

export default Toast;
