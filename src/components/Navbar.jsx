"use client";

import Link from "next/link";
import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  {
    id: 1,
    title: "Anasayfa",
    url: "/",
  },
  {
    id: 2,
    title: "makaleler",
    url: "/articles",
  },
  {
    id: 3,
    title: "Arabuluculuğa Başvur",
    url: "/apply",
  },
  {
    id: 4,
    title: "Hakkımızda",
    url: "/about",
  },
  {
    id: 5,
    title: "İletişim",
    url: "/contact",
  },
];

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
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.url}
            className="link"
            onClick={() => setOpen(false)}
          >
            {link.title}
          </Link>
        ))}
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
