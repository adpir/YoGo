import React from "react";
import { Link, NavLink } from "react-router-dom";
import BackButton from "../BackButton";
import HamburgerMenu from "../HamburgerMenu";

export default function Navbar() {
  return (
    // <!-- This example requires Tailwind CSS v2.0+ -->
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg from-transparent bg-opacity-75	bg-yellow-50">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <BackButton />
        <Link to="/">
          <h1 className="inline-flex py-6 px-3 text-yellow-400 hover:text-green-900 text-4xl font-bold tracking-widest pacifico-title">
            YOGO
            </h1>
        </Link>
        <HamburgerMenu />
      </div>
    </nav>
  );
}
