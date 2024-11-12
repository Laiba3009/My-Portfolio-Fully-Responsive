// src/components/Header.tsx
import Image from "next/image";
import Link from "next/link";
import "../styles/header.css";
const Header = () => {
  return (
    <div className="header">
      <Image
        className="logo-imag"
        src="/image/logo1.png"
        width={110}
        height={80}
        alt="logo image"
      />
      <div className="header-1">
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
    
  );
};

export default Header;
