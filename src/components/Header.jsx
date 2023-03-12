import Link from "next/link";
import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="menuBar">
      <div className="menuLinks">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </div>
      <div className="menuIcon">Icon</div>
    </div>
  );
}

export default Header;
