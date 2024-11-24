"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/header.css";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);  // Toggle menu visibility
  };

  return (
    <div className="header">
      <Image
        className="Logo"
        src="/image/logo1.png"
        width={110}
        height={80}
        alt="logo image"
      />
      <div className="header-1">
        {/* Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <span>< IoMenu /></span>
        </div>

        {/* Side Navbar (Sliding Menu) */}
        <div className={`side-navbar ${isMenuOpen ? 'active' : ''}`}>
          <ul className="header-link">
            <li>
              <Link className="nav-link" href="/">Home</Link>
            </li>
            <li>
              <Link className="nav-link" href="/about">About</Link>
            </li>
            <li>
              <Link className="nav-link" href="/project">Project</Link>
            </li>
            <li>
              <Link className="nav-link" href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
