import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <Link href="/" className="logo">
        Arabulucu
      </Link>
      <div className="links">
        <ThemeToggle />
        <Link href="/blog">Blog</Link>
        <Link href="/about">hakkımda</Link>
      </div>
    </div>
  );
};

export default Navbar;
