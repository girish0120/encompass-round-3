import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-3xl font-bold text-[#81C408]">
          Farm Fresh Delights
        </div>
        <ul className="hidden md:flex space-x-8 text-gray-700 font-semibold">
          <li>
            <a href="#" className="text-sm hover:text-[#81C408] transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-[#81C408] transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-[#81C408] transition">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="text-sm hover:text-[#81C408] transition">
              Contact
            </a>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          <div>
            <FontAwesomeIcon
              icon={faBagShopping}
              className="text-[#81C408] text-2xl"
            />
          </div>
          <div>
            <FontAwesomeIcon
              icon={faUser}
              className="text-[#81C408] text-2xl"
            />
          </div>
        </div>
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
              className="block text-sm font-semibold hover:text-[#81C408] transition"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-sm font-semibold hover:text-[#81C408] transition"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-sm font-semibold hover:text-[#81C408] transition"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block text-sm font-semibold hover:text-[#81C408] transition"
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
