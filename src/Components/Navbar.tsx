import { useState } from "react";
import { NavLink } from "react-router-dom";
import { BsFillCaretDownFill } from "react-icons/bs";
import logo from "../assets/calcula8logo.svg";
import userImage from "../assets/userimage.svg";
import { CgMenuLeft } from "react-icons/cg";
import { IoMdClose } from "react-icons/io";
const Navbar = () => {
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleUserDropdown = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className="">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <img src={logo} alt="Logo" className="h-auto w-12" />
          </div>

          {/* Navigation Links */}
          <ul className="hidden lg:flex lg:items-center lg:space-x-28">
            <li>
              <NavLink
                to="/"
                className="block text-primary-black font-semibold text-lg py-2 px-4"
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/exams"
                className="block text-primary-black font-semibold text-lg py-2 px-4"
              >
                Exams
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/history-scores"
                className="block text-primary-black font-semibold text-lg py-2 px-4"
              >
                History & Scores
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center space-x-4">
            {/* Hamburger Icon */}
            <div className="lg:hidden">
              <button
                className="flex items-center px-3 py-2 border rounded text-gray-600 border-gray-400 hover:text-black hover:border-black"
                onClick={toggleMobileMenu}
              >
                {showMobileMenu ? (
                  <IoMdClose size={24} />
                ) : (
                  <CgMenuLeft size={24} />
                )}
              </button>
            </div>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button
                className="flex items-center flex-row-reverse text-white focus:outline-none"
                onClick={toggleUserDropdown}
              >
                <img src={userImage} alt="User Profile" />
                <BsFillCaretDownFill
                  className="mr-1 lg:inline-block hidden text-primary-black"
                  size={20}
                />
              </button>

              {/* User Dropdown Content */}
              {showUserDropdown && (
                <div className="absolute z-10 right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg">
                  <div className="p-2">
                    <p className="text-gray-800">User Name</p>
                    <p className="text-gray-600 text-sm">user@example.com</p>
                    {/* Add more user details as needed */}
                  </div>
                  <div className="border-t border-gray-200">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Profile
                    </button>
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Logout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {showMobileMenu && (
          <div className="lg:hidden">
            <div className="bg-white border mt-5 rounded-xl border-primary-purple shadow-lg">
              <ul className="p-2">
                <li>
                  <NavLink
                    to="/"
                    className="block text-primary-black font-semibold text-lg py-2 px-4"
                    onClick={toggleMobileMenu}
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/exams"
                    className="block text-primary-black font-semibold text-lg py-2 px-4"
                    onClick={toggleMobileMenu}
                  >
                    Exams
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/history-scores"
                    className="block text-primary-black font-semibold text-lg py-2 px-4"
                    onClick={toggleMobileMenu}
                  >
                    History & Scores
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
