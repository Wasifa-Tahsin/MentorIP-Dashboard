import React from "react";
import headerLogo from "../../assets/images/mentoriplogo.png";
import logoImage from "../../assets/images/logoimage.png";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Header = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <header className="w-full bg-white shadow-sm px-4 sm:px-6 py-3 flex items-center justify-between">
      {/* Left: Mobile Menu + Logo */}
      <div className="flex items-center gap-2">
        <button
          className="lg:hidden text-red-800 p-2 rounded-md hover:bg-gray-100 transition"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          {isSidebarOpen ? <IoClose size={26} /> : <FiMenu size={24} />}
        </button>

        <img
          className="w-40 sm:w-52 md:w-60 h-auto object-contain"
          src={headerLogo}
          alt="Logo"
        />
      </div>

      {/* Right: Notifications + User */}
      <div className="flex items-center gap-3">
        <IoMdNotificationsOutline className="text-3xl sm:text-4xl text-red-800 bg-gray-200 p-2 rounded-full hover:bg-gray-300 transition" />
        <img
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          src={logoImage}
          alt="User"
        />
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base md:text-lg">
          Marvin McKinney
        </h3>
      </div>
    </header>
  );
};

export default Header;
