import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold flex items-center justify-center  ">
          <FaBook /> Digital_Library
        </div>

        {/* Middle part: Navigation links */}
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/mybooks" className="text-white hover:text-gray-300">
            My Book
          </Link>
          <Link to="/allbooks" className="text-white hover:text-gray-300">
            All Books
          </Link>
          <Link to="/addbook" className="text-white hover:text-gray-300">
            Add Book
          </Link>
          <Link to="/" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <a href="#" className="text-white hover:text-gray-300">
            Wishlist
          </a>
        </div>

        {/* Right side: Profile Picture and Dropdown */}
        <div className="relative">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleDropdown}
          >
            <img
              src="your-profile-picture-url.jpg"
              alt="Profile"
              className="w-10 h-10 rounded-full"
            />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="px-4 py-2">
                {/* User Email */}
                <p className="text-gray-600">user@email.com</p>
              </div>
              <div className="border-t border-gray-300"></div>
              <div className="px-4 py-2">
                {/* Sign Out */}
                <button className="text-red-600 hover:text-red-800 focus:outline-none">
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile menu button for small screens */}
        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleDropdown}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
