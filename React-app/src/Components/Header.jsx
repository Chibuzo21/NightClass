import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className=' py-3  text-xl bg-gray-600 text-white'>
      <nav className='mx-auto max-w-[80%] flex justify-between items-center'>
        {Navbar.map((nav, index) => (
          <Link to={nav.path} key={index} className='hover:text-gray-800'>
            {nav.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}

const Navbar = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Services", path: "/services" },
  { name: "Login", path: "/login" },
];
