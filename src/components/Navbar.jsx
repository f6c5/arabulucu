"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`navbar-container-fluid ${open && "show-menu"}`}>
      <Link href="/" className="logo">
        Arabulucu
      </Link>
      <div className="links-pinned">
        <ThemeToggle />
      </div>
      <div className="links">
        <Link href="/" className="link">
          Ana Sayfa
        </Link>
        <Link href="/about" className="link">
          Hakkımızda
        </Link>
        <Link href="/blog" className="link">
          Blog
        </Link>
      </div>
      <div
        className={`burger-menu ${open && "active"} `}
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
