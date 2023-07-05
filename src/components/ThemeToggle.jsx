"use client";
import { changeThemeStore } from "@/redux";
import React from "react";
import { useSelector } from "react-redux";

const ThemeToggle = () => {
  const { theme } = useSelector((store) => store.theme);

  return (
    <div
      className="themeToggleContainer"
      onClick={() => changeThemeStore(theme === "light" ? "dark" : "light")}
    >
      <div className="icon">🌙</div>
      <div className="icon">☀️</div>
      <div
        className="ball"
        style={theme === "light" ? { left: "2px" } : { right: "2px" }}
      />
    </div>
  );
};

export default ThemeToggle;