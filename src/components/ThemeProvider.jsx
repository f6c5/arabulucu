"use client";

import { changeThemeStore } from "@/redux";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const ThemeProvider = ({ children }) => {
  const { theme } = useSelector((store) => store.theme);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      changeThemeStore(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <div className={`theme ${theme}`}>{children}</div>
    </div>
  );
};

export default ThemeProvider;
