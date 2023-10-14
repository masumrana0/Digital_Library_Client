import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBook } from "react-icons/fa";
import HandleLogout from "../utility/HandleLogout";
import { useAppSelector } from "../redux/hook";
import { useDispatch } from "react-redux";
import { logout } from "../redux/features/authSlice";
import UserCredentialFromLocalStorage from "../utility/UserCredential";
import { IUser } from "../types/globalTypes";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const userData = useAppSelector((state) => state.auth);

  const localStorageCredential = UserCredentialFromLocalStorage();

  let UserCredential: IUser | null = null;
  if (userData.isAuthenticated) {
    UserCredential = userData.userCredential;
  } else if (localStorageCredential) {
    UserCredential = localStorageCredential;
  }

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

          <Link to="/wishlist" className="text-white hover:text-gray-300">
            Wishlist
          </Link>
        </div>

        {/* Right side: Profile Picture and Dropdown */}
        {UserCredential ? (
          <div className="relative">
            <button
              className="text-white hover:text-gray-300 focus:outline-none"
              onClick={toggleDropdown}
            >
              <img
                src={UserCredential?.photoUrl}
                alt="Profile"
                className="w-10 h-10 rounded-full"
              />
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="px-4 py-2">
                  {UserCredential?.email && (
                    <p className="text-gray-600">{UserCredential?.email}</p>
                  )}
                </div>
                <div className="border-t border-gray-300"></div>
                <div className="px-4 py-2">
                  {/* Sign Out */}
                  <button
                    onClick={(HandleLogout(), () => dispatch(logout()))}
                    className="text-red-600 hover:text-red-800 focus:outline-none"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login">
            {" "}
            <button
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-white "
            >
              login
            </button>
          </Link>
        )}

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
