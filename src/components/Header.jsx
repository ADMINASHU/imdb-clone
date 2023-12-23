import Link from "next/link";
import React from "react";
import Image from "next/image";
import "./header.css";

function Header() {
  return (
    <div className="menuBar">
      <div className="menuLinks">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="menuIcon">
        <Link href="/">
          <Image className="logo" src="/logo.png" width={200} height={40} placeholder="logo" />
        </Link>
      </div>
    </div>
  );
}

export default Header;
