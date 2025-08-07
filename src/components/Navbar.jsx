import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <img src="" alt="" />
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-600 transition">
              Contact
            </a>
          </li>
        </ul>
        <button
          className="md:hidden flex flex-col space-y-1 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-gray-600"></span>
          <span className="w-6 h-0.5 bg-gray-600"></span>
          <span className="w-6 h-0.5 bg-gray-600"></span>
        </button>
      </div>
      {open && (
        <ul className="md:hidden px-4 pb-4 space-y-2 bg-white shadow">
          <li>
            <a
              href="#"
              className="block font-semibold hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-semibold hover:text-blue-600 transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-semibold hover:text-blue-600 transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block font-semibold hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
