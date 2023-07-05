"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={open ? "navbar-container show-menu" : "navbar-container"}>
      <Link href="/" className="logo">
        Arabulucu
      </Link>
      <div className="links-pinned">
        <ThemeToggle />
      </div>
      <div className="links">
        <Link href="/blog">Blog</Link>
        <Link href="/about">hakkımda</Link>
      </div>
      <div
        className={open ? "burger-menu active" : "burger-menu"}
        onClick={() => setOpen((prev) => (prev ? false : true))}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default Navbar;
