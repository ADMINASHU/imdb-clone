import Link from "next/link";
import React from "react";
import "./navbar.css"

const Navbar = () => {
  return (
    <div className="navLinks">
      <Link href={`/?genre=trending`}>Trending</Link>
      <Link href={`/?genre=topRated`}>Top Rated</Link>
    </div>
  );
};

export default Navbar;
