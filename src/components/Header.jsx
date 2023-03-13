import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./header.css";
import logo from "../../public/logo.png";

function Header() {
  return (
    <div className="menuBar">
      <div className="menuLinks">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="menuIcon">
        <Link  href="/">
          <Image className="logo" src={logo} placeholder="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
